import sublinks from './data';
import { useGlobalContext } from './Context';
import type { ReactElement } from 'react';
import { useRef } from 'react';

const Submenu = (): ReactElement => {
  const { pageId, setPageId } = useGlobalContext();

  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const submenuContainer = useRef<HTMLDivElement | null>(null);

  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    const submenu = submenuContainer.current;
    if (submenu) {
      const { left, right, bottom } = submenu.getBoundingClientRect();
      const { clientX, clientY } = event;

      const isOutside =
        clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1;

      if (isOutside) {
        setPageId(null);
      }
    }
  };

  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links.length && currentPage.links.length > 3
              ? '1fr 1fr'
              : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
