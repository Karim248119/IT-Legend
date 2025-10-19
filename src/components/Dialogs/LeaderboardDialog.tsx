"use client";
import {
  Dialog,
  DialogClose,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import IconButton from "../Buttons/IconButton";
import { BiTrophy } from "react-icons/bi";
import { X } from "lucide-react";
import Header from "../Header";

const LeaderboardDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton icon={<BiTrophy />} toltip="Leaderboard" />
      </DialogTrigger>
      <DialogOverlay className="w-screen h-screen bg-white md:p-10 p-5">
        <DialogClose asChild>
          <button className="absolute top-5 right-5 md:w-8 w-6 aspect-square flex-center rounded-lg hover:bg-teal-500 hover:text-white border border-teal-500 duration-300">
            <X className="w-4 md:w-6" />
          </button>
        </DialogClose>
        <div className="w-full lg:w-1/2 h-full flex flex-col gap-5  mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-teal-800">
            Leaderboard
          </h2>
          <div
            dir="rtl"
            className="w-full mx-auto md:p-5 p-3 md:rounded-2xl rounded-lg bg-teal-500/10 flex items-center gap-3"
          >
            <span className="text-2xl">💪</span>
            <p className="md:text-base text-xs">
              عظيم يا صديقي. أداءك في الكورس دة أحسن من 60% من الناس. كمل عايز
              أشوف اسمك في البورد هنا.
            </p>
          </div>
          <div className="w-full flex-1 mx-auto md:p-5 p-3 md:rounded-2xl rounded-lg bg-teal-500/10 grid lg:grid-rows-5 md:grid-cols-2 md:gap-5 gap-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-full bg-white md:rounded-xl rounded"
              />
            ))}
          </div>
        </div>
      </DialogOverlay>
    </Dialog>
  );
};

export default LeaderboardDialog;
