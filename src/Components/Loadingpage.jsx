import React from 'react';
import Lottie from 'lottie-react';
import Loader from './loading.json'

const LoadingPage = () => {
 

  return (
    <div className=' h-screen w-full bg-primary-200 flex  flex-col justify-center items-center '>
    <div className=' h-screen w-full inline-flex justify-center items-center '>
      <Lottie animationData={Loader} autoplay={true} loop={true} />
    </div>
    </div>
  );
};

export default LoadingPage;
