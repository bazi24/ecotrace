import Logo from "../assets/ecotrace.svg";
import MenuButton from "./MenuButton";
const Navbar = () => {
  const links = ["Link 1", "Link 2", "Link 3", "Link 4"];
  return (
    <nav className="flex h-20 place-content-center">
      <details className="absolute left-0 dropdown sm:hidden mt-3">
        <MenuButton />
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
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

      <ul className="sm:flex hidden">
        {links.map((link) => (
          <li className="text-center" key={link}>
            <a>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
