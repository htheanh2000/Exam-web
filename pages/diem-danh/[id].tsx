import * as faceapi from 'face-api.js';
import React from 'react';
import Router, { useRouter } from "next/router"
import { collection, doc, DocumentData, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp"
import { getApp } from "firebase/app"
import { getDownloadURL, getStorage, ref } from "firebase/storage"
function App() {

  const firebaseApp = getApp();
  const storage = getStorage(firebaseApp, "gs://exam-web-b19d1.appspot.com/");
  const [modelsLoaded, setModelsLoaded] = React.useState(false);
  const [students, setStudent] = React.useState([]);
  const [captureVideo, setCaptureVideo] = React.useState(false);
  const [faceMatcher, SetFaceMatcher] = React.useState<faceapi.FaceMatcher>();
  const router = useRouter()
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const videoHeight = 480;
  const videoWidth = 640;
  const route = useRouter()
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  React.useEffect(() => {
    run()

  }, []);
  const run = async () => {
    await loadModels();
    const stu = await getStudents()
    if (!stu) return;
    await trainingFace(stu)
    startVideo()
  }
  const loadModels = async () => {
    console.log("LOAD MODELS STARTED");

    const MODEL_URL = '/models';
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
      faceapi.loadMtcnnModel(MODEL_URL),
      faceapi.loadFaceRecognitionModel(MODEL_URL)

    ]).then(
      () => {
        console.log("setModelsLoaded")
        setModelsLoaded(true)
      }
    );

    console.log("LOAD MODELS FINISHED");
  }
  const trainingFace = async (stu: any) => {
    const arr = stu
    console.log("--> students", students);

    const labeledDescriptors = await Promise.all(
      arr.map(async (student) => {
        const descriptions = []
        const img = await faceapi.fetchImage(student.url)
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
        // console.log(label + JSON.stringify(detections))
        descriptions.push(detections.descriptor)
        console.log(student.id + ' Faces Loaded | ')
        return new faceapi.LabeledFaceDescriptors(student.id, descriptions)
      })
    )
    console.log("labeledDescriptors", labeledDescriptors);
    if (!labeledDescriptors.length) return null
    else {
      SetFaceMatcher(new faceapi.FaceMatcher(labeledDescriptors, 0.6))
    }
  }
  const getStudents = async () => {
    const querySnapshot = await getDocs(collection(db, "class", `${route.query.id}/students`));
    let arr: DocumentData[] = []
    querySnapshot.forEach((doc) => {
      if (doc.data()) {
        arr.push(doc.data())
      }
    });
    const students = []
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      const url = await getAvatar(element.url)
      students.push({
        ...element,
        url
      })
    }
    console.log('getStudents', students);
    setStudent(students)
    return students
  }

  const getAvatar = async (name: string) => {
    if (!name) return null
    return await getDownloadURL(ref(storage, name))
  }

  const startVideo = () => {
    setCaptureVideo(true);
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  }

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      try {
        if (canvasRef && canvasRef.current) {
          canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
          const displaySize = {
            width: videoWidth,
            height: videoHeight
          }

          faceapi.matchDimensions(canvasRef.current, displaySize);

          const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
          const resizedDetections = faceapi.resizeResults(detections, displaySize);

          const results = resizedDetections.map((d) => {
            return faceMatcher.findBestMatch(d.descriptor)
          })
          canvasRef && canvasRef.current && canvasRef.current.getContext('2d').clearRect(0, 0, videoWidth, videoHeight);
          results.forEach((result, i) => {
            const box = resizedDetections[i].detection.box
            const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
            console.log("result.toString()", result.toString());
            checkStudentIn(result.toString())
            try {
              drawBox.draw(canvasRef.current)
            } catch (error) {
            }
          })
          console.log("results: " + results);
          // canvasRef && canvasRef.current && faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
          // canvasRef && canvasRef.current && faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
          // canvasRef && canvasRef.current && faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
        }
      } catch (error) {
      }

    }, 1000)
  }

  const checkStudentIn = (student) => {
    console.log(students);
    console.log("result", student.split(" "));
    const stu:any = students.filter(stud => stud.id === student.split(" ")[0])[0]
    console.log("checkStudentIn", stu);
    const today = new Date().toLocaleDateString("en-GB")

    console.log(stu);
    
    if (!stu.diemdanh || !stu.diemdanh[today] ) {
      const newValue = {
        ...stu,
        diemdanh: {
          ...stu.diemdanh,
          [today]: true
        }
      }
      console.log("set doc");
      
      setDoc(doc(db, `class/${router.query.id}/students`, stu.id), newValue);
    }
  }

  const closeWebcam = () => {
    if (!videoRef.current || !videoRef.current.srcObject) return
    videoRef.current.pause();
    videoRef.current.srcObject.getTracks()[0].stop();
    setCaptureVideo(false);
    Router.back()
  }

  return (
    <div>
      <div style={{ textAlign: 'center', padding: '10px' }}>
        {
          captureVideo && modelsLoaded ?
            <button onClick={closeWebcam} style={{ cursor: 'pointer', backgroundColor: 'green', color: 'white', padding: '15px', fontSize: '25px', border: 'none', borderRadius: '10px' }}>
              Close Webcam
            </button>
            :
            <button onClick={startVideo} style={{ cursor: 'pointer', backgroundColor: 'green', color: 'white', padding: '15px', fontSize: '25px', border: 'none', borderRadius: '10px' }}>
              Open Webcam
            </button>
        }
      </div>
      {
        captureVideo ?
          modelsLoaded ?
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <video ref={videoRef} height={videoHeight} width={videoWidth} onPlay={handleVideoOnPlay} style={{ borderRadius: '10px' }} />
                <canvas ref={canvasRef} style={{ position: 'absolute' }} />
              </div>
            </div>
            :
            <div>loading...</div>
          :
          <>
          </>
      }
    </div>
  );
}

export default App;