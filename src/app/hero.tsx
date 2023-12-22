//@ts-check
"use client";
import YouTube from "react-youtube";

function goTo(href: string) {
  return window.open(href, "_blank");
}

function Hero() {
  const opts = {
    width: "100%",
    height: "500",
    playerVars: {
      autoplay: 0,
      loop: 1,
      controls: 1,
      showinfo: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <header className="bg-gray-900 border-solid-red mt-20">
      <div>
        <YouTube videoId="tPdiOhe-9cU" opts={opts} />
      </div>
    </header>
  );
}
export default Hero;
