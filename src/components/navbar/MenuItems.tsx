import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const MenuItems = ({ items, depthLevel }: any) => {
  const [dropdown, setDropdown] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const navigate = useNavigate();
  let ref: any = useRef();

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';

  useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	// fucntion to help scroll to top smoothly
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
  const handleItemClick = (url: string) => {
    setDropdown(false);
    navigate(url);
  };
  const location = useLocation();

  return (
    <li
      className="menu-items relative text-lg "
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            className={`${
              location.pathname === items.url ? 'active' : ''
            } overflow-hidden flex items-center my-2 pl-3 pr-4 text-gray-700  w-full lg:border-0 lg:hover:bg-purple-700 lg:hover:text-[#EDDDE7] lg:p-0 rounded-lg`}
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link className="text-left p-1" onClick={() => {handleItemClick(items.url); goToTop();}} to={items.url}>
                {items.title}
              </Link>
            )}

            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel > 0 && window.innerWidth > 960 ? (
              <span className="flex"><FaCaretDown /></span>
            ) : (
              <span className="arrow " />
            )}
          </button>
          <ul
            className={`dropdown absolute right-0 lg:-left-56 left-auto shadow-lg text-sm lg:z-50 z-20 min-w-max px-2 py-0 list-none bg-white rounded-md hidden ${dropdownClass} ${
              dropdown ? 'show' : ''
            }`}
          >
            {items.submenu.map((submenu: any, index: number) => (
              <div key={`submenu-${index}`}>
                <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
              </div>
            ))}
          </ul>
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            className="flex items-center border-none cursor-pointer w-full text-left px-3 py-4 hover:bg-[#f2f2f2]"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
            {depthLevel > 0 ? (
              <ChevronRightIcon
                className={'rotate-90 text-[#EDDDE7] my-auto ml-auto h-5 w-5 shrink-0'}
                aria-hidden="true"
              />
            ) : (
              <span className="arrow" />
            )}
          </button>
          <ul
            className={`dropdown absolute right-0 left-auto shadow-lg text-sm lg:z-50 z-30 min-w-max px-2 py-0 list-none bg-white rounded-md hidden ${dropdownClass} ${
              dropdown ? 'show block' : ''
            }`}
          >
            {items.submenu.map((submenu: any, index: number) => (
              <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
            ))}
          </ul>
        </>
      ) : (
        <NavLink
          className={`${location.pathname === items.url ? 'active' : ''} block my-2 py-2 pl-3 pr-4 text-gray-700  hover:bg-gray-50 lg:border-0 lg:hover:bg-purple-700 lg:hover:text-[#EDDDE7] lg:p-1 rounded-lg `}
          onClick={() => { handleItemClick(items.url); goToTop(); }}
          to={items.url}
        >
          {items.title}
        </NavLink>
      )}
    </li>
  );
};

export default MenuItems;
