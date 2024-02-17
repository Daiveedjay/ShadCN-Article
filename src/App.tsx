import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function App() {
  return (
    <div className=" flex justify-center  items-center h-screen">
      <HoverCard>
        <HoverCardTrigger className=" rounded-xl text-white py-2 px-4 bg-slate-500 ">
          First Shadcn Component
        </HoverCardTrigger>
        <HoverCardContent className=" font-bold text-slate-500 w-max">
          My first of many components
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
