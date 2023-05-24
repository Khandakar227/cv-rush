import { useState } from "react";
import { FaShare } from "react-icons/fa";

function ShareButton() {
  const [_, setShowSharingOption] = useState(false);

  return (
    <>
    <div className="relative">
      <button
          onClick={() => setShowSharingOption(true)}
        className="bg-[#eca22f] text-black py-4 px-8 flex gap-2 items-center justify-center rounded-md"
        type="button"
      >
        <FaShare />
        <span>Share</span>
      </button>
    </div>
    </>
  );
}

export default ShareButton;
