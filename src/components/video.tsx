import { FC } from "react";

const VideoFrame: FC = () => {
  return (
    <div className="aspect-video">
      <video controls className="h-full w-full rounded-lg">
        <source
          className="h-full w-full rounded-lg"
          src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
          //   type="video/mp4"
        />
      </video>
    </div>
  );
};

const VideoSection: FC = () => {
  return (
    <div className="container max-w-[70%]">
      <VideoFrame />
      {/* <VideoFrame />
      <VideoFrame />
      <VideoFrame /> */}
    </div>
  );
};

export { VideoSection };
