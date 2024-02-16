import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative">
      <video
        src="/medias/signinbg.mp4"
        type="video/mp4"
        autoPlay
        loop
        className="w-full h-full object-cover absolute"
      ></video>
      <div className="h-screen flex items-center justify-center relative">
        <SignIn />
      </div>
    </div>
  );
}
