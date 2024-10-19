"use client";

import { checkInForCredits } from "@/lib/actions/use.actions";
import { useState } from "react";

const DailyCheckIn = ({
  userId,
  checkinstatus,
}: {
  userId: string;
  checkinstatus: string;
}) => {
  const today = new Date().toDateString();
  const [isCheckedIn, setIsCheckedIn] = useState(checkinstatus === today);

  const handleCheckIn = async () => {
    try {
      const result = await checkInForCredits(userId);
      console.log(result);
      if (result) {
        setIsCheckedIn(true);
      }
    } catch (error) {}
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4">每日签到</h2>
      <button
        onClick={handleCheckIn}
        disabled={isCheckedIn}
        className="bg-purple-500 text-white px-4 py-2 rounded disabled:bg-gray-300 w-full"
      >
        {isCheckedIn ? "今日已签到" : "立即签到"}
      </button>
    </div>
  );
};

export default DailyCheckIn;
