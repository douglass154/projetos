import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import NavLinks from "./NavLinks";

const Navbar = ({ navLinks }) => {
   const [open, setOpen] = useState(false);

   return (
      <header className="bg-slate-950/95 sticky top-0 z-40 border-b border-white/5">
         <div className=" flex justify-between items-center mx-auto p-4 max-w-6xl">
            <a href="#" className="flex items-center gap-2">
               <Sparkles className="size-5 text-fuchsia-400" />
               <span className="font-bold tracking-tight">StarPlatinum</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
               <NavLinks links={navLinks} />
            </nav>

            <button
               onClick={() => setOpen(true)}
               className="md:hidden p-2 rounded-lg"
            >
               <Menu className="size-5" />
            </button>
         </div>

         {open && (
            <div className="md:hidden">
               <div
                  onClick={() => setOpen(false)}
                  className="fixed bg-black/60 inset-0"
               >
                  <div className="fixed right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/10 p-6">
                     <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                           <Sparkles className="size-6 text-fuchsia-400" />
                           <span className="font-semibold">StarPlatinum</span>
                        </div>
                        <button
                           onClick={() => setOpen(false)}
                           className="p-2 rounded-lg"
                        >
                           <X className="size-5" />
                        </button>
                     </div>
                     <div className="flex flex-col gap-4 p-4 w-90">
                        <NavLinks
                           links={navLinks}
                           onClickLink={() => setOpen(false)}
                        />
                     </div>
                  </div>
               </div>
            </div>
         )}
      </header>
   );
};

export default Navbar;
