const Footer = () => {
  const items = ["Impressum", "Datenschutz", "Kontakt"];
  return (
    <footer className="flex w-[100%] place-content-center">
      {items.map((item) => (
        <a className="pl-6 pr-6 pt-1 pb-1" key={item}>
          {item}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
