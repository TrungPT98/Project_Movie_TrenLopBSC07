import React from "react";
import Lottie from "react-lottie";
import * as loading from "./../../assets/animation/loading.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex items-center fixed w-full h-full bg-white" style={{zIndex: '999'}}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;
