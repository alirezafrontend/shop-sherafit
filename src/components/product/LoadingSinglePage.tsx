import { ClipLoader } from "react-spinners";

export default function LoadingSinglePage() {
  return (
    <div>
      <ClipLoader
        color="var(--panel_main_color) "
        size={65}
      />
    </div>
  );
}
