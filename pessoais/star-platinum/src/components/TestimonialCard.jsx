import { Star } from "lucide-react";

const TestimonialCard = ({ text, author }) => (
   <blockquote className="grid-container__card flex flex-col justify-between">
      <div className="flex items-center gap-2 text-amber-400">
         {Array.from({ length: Math.round(Math.random() * (5 - 4) + 4) }).map((_, i) => (
            <Star key={i} className="size-4 fill-current" />
         ))}
      </div>
      <p className="mt-2 text-slate-300">{text}</p>
      <footer className="mt-3 text-sm text-slate-300">{author}</footer>
   </blockquote>
);

export default TestimonialCard;
