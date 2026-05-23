export default function VideoBackground() {
  return (
    <div className="video-bg" aria-hidden="true">
      <video autoPlay loop muted playsInline preload="auto" poster="">
        <source
          src="https://res.cloudinary.com/demo/video/upload/e_sepia:90,q_auto,w_1920/samples/sea-turtle.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/demo/video/upload/e_sepia:90,q_auto,w_1920/samples/cld-sample-video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-bg-overlay" />
    </div>
  )
}
