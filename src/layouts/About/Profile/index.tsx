import Video from "./Video";
import Content from "./Content";

export default function Profile() {
  return (
    <div className="p-4 flex flex-col gap-5">
      <Video />
      <Content />
    </div>
  );
}
