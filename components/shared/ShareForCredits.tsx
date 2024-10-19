"use client";

import { useState } from "react";

const ShareForCredits = () => {
  // const [isShared, setIsShared] = useState(false);
  const [message, setMessage] = useState("");

  const handleShare = async () => {
    try {
      // const result = await shareForCredits(userId);
      // if (result) {
      //   setIsShared(true);
      //   setMessage(result.message);
      // }
      // 这里可以添加实际的分享逻辑，比如打开分享对话框
    } catch (error) {
      setMessage("分享失败，请稍后再试");
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4">分享获得积分</h2>
      <button
        onClick={handleShare}
        disabled={false}
        className="bg-purple-500 text-white px-4 py-2 rounded disabled:bg-gray-300 w-full"
      >
        分享到社交媒体
      </button>
      {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
    </div>
  );
};

export default ShareForCredits;
