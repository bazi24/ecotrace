const Footer = () => {
  const items = ["impressum", "datenschutz", "contact"];
  return (
    <footer className="w-[100%] text-sm font-bold text-green-800">
      <div className="h-[1px] w-[90%] ml-[5%] bg-green-800"></div>
      <ul className="flex pt-1 pb-1 w-[100%] uppercase mt-2">
        {items.map((item) => (
          <li key={item} className="w-[100%] flex">
            <a
              className="inline-block w-[100%] cursor-pointer text-center hover:underline"
              href={item}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="text-[12px] w-[100%] text-end pr-3">
        {" "}
        &copy; Rechtliche Hinweise 2023
      </div>
    </footer>
  );
};

export default Footer;
