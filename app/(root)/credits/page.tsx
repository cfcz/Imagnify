import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import CreditBalance from "@/components/shared/CreditBalance";
import DailyCheckIn from "@/components/shared/DailyCheckIn";
import ShareForCredits from "@/components/shared/ShareForCredits";
import { getUserById } from "@/lib/actions/use.actions";
import Header from "@/components/shared/Header";

const CreditsPage = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header title="Credits" />
      <section className="mt-8">
        <CreditBalance credits={user.creditBalance} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <DailyCheckIn userId={userId} checkinstatus={user.lastCheckIn} />
          <ShareForCredits />
        </div>
      </section>
    </>
  );
};

export default CreditsPage;
