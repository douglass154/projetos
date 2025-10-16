const NavLinks = ({ links, onClickLink }) => (
   <>
      {links.map(link => (
         <a
            key={link.href}
            href={link.href}
            onClick={onClickLink}
            className="hover:text-fuchsia-300 transition text-slate-200"
         >
            {link.label}
         </a>
      ))}
   </>
);

export default NavLinks;
