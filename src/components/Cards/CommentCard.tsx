import Image from "next/image";

const CommentCard = ({
  name,
  date,
  img,
}: {
  name: string;
  date: string;
  img: string;
}) => {
  return (
    <div className="flex gap-4 items-start">
      <Image
        src={img}
        alt=""
        width={80}
        height={80}
        className="w-14 aspect-square rounded-full object-cover"
      />
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-neutral-600">{name}</p>
        <p className="text-sm text-neutral-500">{date}</p>
        <p className="text-sm text-neutral-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ipsam
          exercitationem perspiciatis ex facere atque quis, hic consequatur enim
          error ea dignissimos facilis nisi temporibus vitae voluptates
          blanditiis! Tempore, aut.
        </p>
      </div>
    </div>
  );
};
export default CommentCard;
