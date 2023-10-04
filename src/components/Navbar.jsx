import Logo from "../assets/ecotrace.svg";
import MenuButton from "./MenuButton";
const Navbar = () => {
  const links = [
    "vision",
    "team",
    "member",
    "donations",
    "sponsors",
    "agenda",
    "contact",
  ];
  return (
    <nav className="flex h-20 place-content-center lg:place-content-start lg:ml-10 ">
      <details className="absolute left-0 dropdown lg:hidden mt-3">
        <MenuButton />
        <ul className="p-2 shadow menu dropdown-content z-20 bg-green-50 rounded-box text-lg text text-green-800  w-[300px]">
          {links.map((link) => (
            <li className="text-center uppercase" key={link}>
              <a href={link}>{link}</a>
            </li>
          ))}
        </ul>
      </details>
      <a href="/">
        <div className="mt-2 flex ">
          <img src={Logo} className="w-16 lg:w-[72px] items-center flex" />
          <div className="items-center flex ml-2 text-2xl lg:text-3xl font-primary antialiased font-bold text-green-700">
            ecotrace
          </div>
        </div>
      </a>
      <ul className="lg:flex hidden mr-10 uppercase z-20 lg:text-sm xl:text-lg font-bold text-green-700 mt-[30px] place-content-end w-[100%]">
        {links.map((link) => (
          <li
            className="pl-3 pr-3 xl:pl-[1.5vw] xl:pr-[1.5vw] cursor-pointer flex hover:underline"
            key={link}
          >
            <a href={link}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
