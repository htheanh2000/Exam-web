import { useEffect } from 'react';

const useScript = (url: unknown) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "../../components/face-scan-page/face-api.min.js";
        script.defer = true;

        const script1 = document.createElement('script');
        script1.src = "../../components/face-scan-page/Script.js";
        script1.defer = true;

        document.body.appendChild(script);
        document.body.appendChild(script1);

        return () => {
            document.body.removeChild(script);
            document.body.removeChild(script1);
        }
    }, [url]);
};

export default useScript