import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <div className="top-to-btm bg-black">
      {showTopBtn && (
        <MdKeyboardArrowUp
          className="icon-position icon-style"
          onClick={goToTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
