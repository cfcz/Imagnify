import Image from "next/image";

interface CreditBalanceProps {
  credits: number;
}

const CreditBalance = ({ credits }: CreditBalanceProps) => {
  return (
    <div className="flex items-center bg-white rounded-lg p-4 shadow-md">
      <Image
        src="/assets/icons/coins.svg"
        alt="积分"
        width={40}
        height={40}
        className="mr-4"
      />
      <div>
        <p className="text-sm text-gray-600">当前积分余额</p>
        <p className="text-2xl font-bold text-purple-600">{credits}</p>
      </div>
    </div>
  );
};

export default CreditBalance;
