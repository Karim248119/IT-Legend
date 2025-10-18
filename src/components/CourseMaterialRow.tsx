const CourseMaterialRow = ({
  icon,
  text,
  value,
  className,
}: {
  icon: React.ReactNode;
  text: string;
  value: string | number;
  className?: string;
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-x-10">
      <div
        className={`flex items-center gap-4 p-4 border-b justify-between ${className}`}
      >
        <div className="flex gap-4 text-neutral-500">
          {icon} <p>{text}</p>
        </div>
        <p>{value}</p>
      </div>
      <div
        className={`hidden md:flex items-center gap-4 p-4 border-b justify-between ${className}`}
      >
        <div className="flex gap-4 text-neutral-500">
          {icon} <p>{text}</p>
        </div>
        <p>{value}</p>
      </div>
    </div>
  );
};
export default CourseMaterialRow;
