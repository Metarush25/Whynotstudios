import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import workSectionVideo from "@/assets/story-video.mov";

const PLAY_INTERVAL_SEC = 7; // play 7 sec then loop from start

export default function WorkSectionVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  useEffect(() => {
    if (!isInView || !videoRef.current) return;
    const video = videoRef.current;
    video.play().catch(() => {});

    const loopAtInterval = () => {
      if (video.currentTime >= PLAY_INTERVAL_SEC) {
        video.currentTime = 0;
      }
    };
    video.addEventListener("timeupdate", loopAtInterval);

    return () => {
      video.pause();
      video.removeEventListener("timeupdate", loopAtInterval);
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="w-full bg-background overflow-hidden"
    >
      <div className="w-full overflow-hidden">
        <video
          ref={videoRef}
          src={workSectionVideo}
          muted
          playsInline
          loop={false}
          className="w-full h-auto object-cover block scale-[1.02] outline-none border-0"
        />
      </div>
    </section>
  );
}
