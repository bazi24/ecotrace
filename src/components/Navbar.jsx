import Logo from "../assets/ecotrace.svg";
import MenuButton from "./MenuButton";
const Navbar = () => {
  const links = [
    "Vision",
    "Our Team",
    "Become a Member",
    "Donations",
    "Agenda",
    "Contact",
  ];
  return (
    <nav className="flex h-20 place-content-center lg:place-content-start lg:ml-20">
      <details className="absolute left-0 dropdown sm:hidden mt-3">
        <MenuButton />
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-green-50 rounded-box w-52">
          {links.map((link) => (
            <li className="text-center" key={link}>
              <a>{link}</a>
            </li>
          ))}
        </ul>
      </details>

      <img src={Logo} className="w-16 flex items-center" />
      <span className="flex items-center ml-2 text-2xl font-primary antialiased font-bold text-green-700">
        ecotrace
      </span>

      <ul className="sm:flex hidden mr-20 uppercase font-bold text-green-700 mt-[30px] place-content-end w-[100%]">
        {links.map((link) => (
          <li
            className="pl-10 pr-10 cursor-pointer flex hover:underline"
            key={link}
          >
            <a>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
