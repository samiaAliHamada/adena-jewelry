import { useState } from "react";
import "./VideoSection.css";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="video_section p-3">
      <h2 className="py-4 text-center">Watch Our Jewelry Story</h2>
      <div className="video_container position-relative w-100 m-auto">
        {!isPlaying ? (
          <div
            className="thumbnail position-absolute top-0 start-0 w-100 h-100"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src="/vid-overlay.png"
              alt="Jewelry Story"
              className="thumbnail_img w-100 h-100 object-fit-cover"
            />
            <div className="play_btn position-absolute top-50 start-50 text-white fs-2 rounded-circle py-3 px-4 bg-black opacity-75">
              ▶
            </div>
          </div>
        ) : (
          <iframe
            src="https://www.youtube.com/embed/oETFndx_pD0?autoplay=1"
            title="YouTube video"
            className="position-absolute top-0 start-0 w-100 h-100"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
