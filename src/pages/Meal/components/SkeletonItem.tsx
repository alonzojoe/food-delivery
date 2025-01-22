import Card from "@/components/UI/Card";

const SkeletonItem = () => {
  return (
    <Card width="w-[150px]" shrink="shrink-0">
      <div className="bg-slate-300 h-36 rounded-lg animate-pulse"></div>
    </Card>
  );
};

export default SkeletonItem;
