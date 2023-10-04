const Footer = () => {
  const items = ["impressum", "datenschutz", "contact"];
  return (
    <footer className="flex w-[100%] place-content-center uppercase text-sm font-bold text-green-800">
      {items.map((item) => (
        <a
          href={item}
          className="pl-4 pr-4 pt-1 pb-1 cursor-pointer hover:underline"
          key={item}
        >
          {item}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
