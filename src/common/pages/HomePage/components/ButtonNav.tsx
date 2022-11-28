import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import debounce from "lodash/debounce";

import { screenSmallerThan } from "common/utils/responsive";
import { ELEMENT_ID } from "common/constants/element";
import ButtonNavPanel from "common/components/ButtonNavPanel";

import icon from "common/assets/wheelchair.svg";

const StyledButtonNav = styled(ButtonNavPanel)`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 100;

  ${screenSmallerThan.tablet} {
    right: 0;
  }
`;

const ButtonNav: React.FunctionComponent = () => {
  const observerRef = useRef<IntersectionObserver>();
  const [activeItemId, setActiveItemId] = useState(ELEMENT_ID.HERO_SECTION);

  const setActiveItemIdDebounced = useMemo(
    () => debounce(setActiveItemId, 300),
    []
  );

  const items = useMemo(() => {
    return [
      {
        id: ELEMENT_ID.HERO_SECTION,
        label: "Hero",
        icon,
      },
      {
        id: ELEMENT_ID.BOOK_SECTION,
        label: "Book",
        icon,
      },
      // {
      //   id: ELEMENT_ID.TRAVEL_SECTION,
      //   label: "Travel",
      //   icon,
      // },
      // {
      //   id: ELEMENT_ID.PHOTOGRAPHY_SECTION,
      //   label: "Photography",
      //   icon,
      // },
    ];
  }, []);

  //----------------------------

  const handleItemChange = useCallback((id) => {
    setActiveItemId(id);
  }, []);

  const setUpIntersectionObserver = useCallback(() => {
    const observer = (observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const activeItemId = entry.target.id;
          if (entry.intersectionRatio > 0.5 && activeItemId)
            setActiveItemIdDebounced(activeItemId);
        });
      },
      {
        root: document,
        rootMargin: "0px",
        threshold: 0.65,
      }
    ));

    const heroSectionElement = document.getElementById(ELEMENT_ID.HERO_SECTION);
    const bookSectionElement = document.getElementById(ELEMENT_ID.BOOK_SECTION);
    const travelSectionElement = document.getElementById(
      ELEMENT_ID.TRAVEL_SECTION
    );
    const photographySectionElement = document.getElementById(
      ELEMENT_ID.PHOTOGRAPHY_SECTION
    );

    if (heroSectionElement) observer.observe(heroSectionElement);
    if (bookSectionElement) observer.observe(bookSectionElement);
    if (travelSectionElement) observer.observe(travelSectionElement);
    if (photographySectionElement) observer.observe(photographySectionElement);
  }, [setActiveItemIdDebounced]);

  //----------------------------

  useEffect(() => {
    setTimeout(() => {
      setUpIntersectionObserver();
    }, 500);
  }, [setUpIntersectionObserver]);

  //----------------------------

  return (
    <StyledButtonNav
      activeItemId={activeItemId}
      onChange={handleItemChange}
      items={items}
    />
  );
};

export default ButtonNav;
