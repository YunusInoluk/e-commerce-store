import { Billboard as BillboardType } from "@/types";

interface BilboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BilboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data.imageUrl})` }}
        className="relative rounded-xl aspect-square md:aspect-[2.4/1] bg-cover overflow-hidden"
      >
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
