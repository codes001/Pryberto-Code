import React, {useState, useEffect} from "react";
import './Loader.css'

const Loading = () => {

 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <div className="loader"></div> : null;
};

export default Loading;
