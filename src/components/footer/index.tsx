import { useLocation } from "react-router-dom";

const footer = {
  title: "Questions? Call +1 (408) 600-1722 (USA)",
  items: [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Privacy",
    "Jobs",
    "Ways to Watch",
    "Terms of use",
    "Speed Test",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
  ],
};

const Footer = () => {
  const location = useLocation();
  const bg = location.pathname === "/profile" ? "bg-mate" : "bg-black";

  return (
    <footer className={`${bg} pb-24`}>
      <div className="container mx-auto">
        <div className="text-white text-3xl mb-4">{footer.title}</div>
        <div className="flex flex-wrap md:flex-row text-center md:text-left">
          {footer.items.map((item, index) => (
            <div
              key={item + index}
              className="flex-shrink w-1/2 md:w-1/4 my-4 text-white text-lg"
            >
              <a href="">{item}</a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
