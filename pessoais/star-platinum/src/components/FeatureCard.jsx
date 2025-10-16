const FeatureCard = ({ icon, title, desc }) => (
   <div className="grid-container__card">
      <div className="flex items-center gap-3">
         {icon}
         <p className="font-semibold">{title}</p>
      </div>
      <p className="text-sm text-slate-300 mt-2">{desc}</p>
   </div>
);

export default FeatureCard;
