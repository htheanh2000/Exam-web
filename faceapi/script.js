const video = document.getElementById('video')
const imageUpload = document.getElementById('imageUpload')
const textMatch = document.getElementById('textMatch')
const textMismatch = document.getElementById('textMismatch')

let image
let canvas

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
]).then(start)

async function start() {
    const container = document.createElement('div')
    container.style.position = 'absolute'
    container.setAttribute('id', 'imageContainer')
    document.getElementById('divImage').appendChild(container)

    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

video.addEventListener('play', () => {
    const webcam = faceapi.createCanvasFromMedia(video)
    webcam.setAttribute("class", "camCanvas")
    document.getElementById('divVideo').appendChild(webcam)
    
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(webcam, displaySize)
    setInterval(async () => {
      const detectionWebcam = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors()
      const resizedDetections = faceapi.resizeResults(detectionWebcam, displaySize)
      webcam .getContext('2d').clearRect(0, 0, webcam .width, webcam .height)
      faceapi.draw.drawDetections(webcam , resizedDetections)
      const webcamDescriptor = await faceapi.detectSingleFace(video).withFaceLandmarks().withFaceDescriptor()

      if (image) {

        const imgDisplaySize = { width: image.width, height: image.height }
        faceapi.matchDimensions(canvas, imgDisplaySize)
        const detectionImage = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
        const imageResizedDetection = faceapi.resizeResults(detectionImage, imgDisplaySize)
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
        faceapi.draw.drawDetections(canvas, imageResizedDetection)
        const imageDescriptor = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceDescriptor()

        const faceMatcher = new faceapi.FaceMatcher(imageDescriptor)
        const bestMatch = faceMatcher.findBestMatch(webcamDescriptor.descriptor)
        console.log(bestMatch.toString())

        /* if (webcamDescriptor && imageDescriptor) {
          const distance = faceapi.euclideanDistance(webcamDescriptor, imageDescriptor)
          console.log(distance)
          if (distance <= 0.5) {
            textMatch.style.visiblity = true
            textMismatch.style.visibility = false
          } else {
            textMatch.style.visiblity = false
            textMismatch.style.visibility = true
          }
        } */
      }
    }, 1000)
  })

  imageUpload.addEventListener('change', async() => {
    if (image) image.remove()
    if (canvas) canvas.remove()
    image = await faceapi.bufferToImage(imageUpload.files[0])
    image.width = 720
    image.height = 560
    document.getElementById('imageContainer').append(image)
    canvas = faceapi.createCanvasFromMedia(image)
    document.getElementById('imageContainer').append(canvas)
  }
)