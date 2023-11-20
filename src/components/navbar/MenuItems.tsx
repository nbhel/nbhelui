import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {FaCaretDown} from 'react-icons/fa'

const MenuItems = ({ items, depthLevel }:any) => {
  const [dropdown, setDropdown] = useState(false);

  let ref: any = useRef();

  useEffect(() => {
    const handler = (event:any) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
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

  const handleClickEvent = (id:any) => {
    console.log('Id -->', id)
  }

  return (
    <li
      className="menu-items relative text-sm"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            className='flex items-center border-none bg-transparent cursor-pointer w-full text-left px-0 py-3 hover:bg-[#f2f2f2]'
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link className='text-left px-1 py-1 hover:bg-[#f2f2f2]' to={items.url}>{items.title}</Link>
            )}

            {depthLevel > 0 &&
            window.innerWidth < 960 ? null : depthLevel > 0 &&
              window.innerWidth > 960 ? (
              <span className='flex'><FaCaretDown /></span>
            ) : (
              <span className="arrow " />
            )}
          </button>
          <ul
            className={`dropdown absolute right-0 lg:left-10 left-auto shadow-lg text-sm lg:z-50 z-20 min-w-max px-2 py-0 list-none bg-white rounded-md hidden ${dropdownClass} ${
              dropdown ? 'show' : ''
            }`}
          >
            {items.submenu.map((submenu: any, index:number) => (
              <div onClick={() => handleClickEvent(submenu.url)}>
                <MenuItems
                  items={submenu}
                  key={index}
                  depthLevel={depthLevel}
                />
              </div>
            ))}
          </ul>
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            className='flex items-center border-none bg-red-500 cursor-pointer w-full text-left px-3 py-4 hover:bg-[#f2f2f2]'
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
            {depthLevel > 0 ? (
              <span className='ml-1'>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <ul
            className={`dropdown absolute right-0 left-auto shadow-lg text-sm lg:z-50 z-30 min-w-max px-2 py-0 list-none bg-white rounded-md hidden ${dropdownClass} ${
              dropdown ? 'show block' : ''
            }`}
          >
            {items.submenu.map((submenu: any, index:number) => (
              <MenuItems
                items={submenu}
                key={index}
                depthLevel={depthLevel}
              />
            ))}
          </ul>
        </>
      ) : (
        <Link className='text-left px-3 py-4 hover:bg-[#f2f2f2]' to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
