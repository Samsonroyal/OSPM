/* eslint-disable react/no-unescaped-entities */
"use client";
import CreateSprintCard from "@/components/component/terminal/createsprintcard";
import DailyMotivation from "@/components/component/terminal/dailymotivation";
import TerminalCoffeeCard from "@/components/component/terminal/terminalcoffeecard";
import TopBar from "@/components/component/topbar";

export default function Terminal() {

  return (
    <main className="min-h-screen w-[1058px] mx-auto relative">
      <TopBar/>
        <div className=" flex mt-[96px]">
          <DailyMotivation/>
          <TerminalCoffeeCard/>
        </div>
        <p className="text-[#CBD5E1] my-6 text-xl">Sprint breakdown</p>
        <CreateSprintCard/>
    </main>
  );
}