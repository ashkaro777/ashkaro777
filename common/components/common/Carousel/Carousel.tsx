import React, { useCallback } from "react";
import styled from "styled-components";
import Image from "next/image";
import CarouselComponent from "react-elastic-carousel";

import { squareSizing } from "styles/utils/sizingUtils";

import imgDot from "./assets/dot.svg";

const StyledPaginationButton = styled.button<{ $isActive?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: none;
  background: none;
  outline: none;

  ${squareSizing("24px")}
`;

const StyledPagination = styled.div`
  align-self: flex-start;
`;

const renderPagination = ({ pages, activePage, onClick }: any) => {
  return (
    <StyledPagination>
      {pages.map((page: any) => {
        const isActivePage = activePage === page;
        return (
          <StyledPaginationButton
            key={page}
            onClick={() => onClick(page)}
            $isActive={isActivePage}
          >
            <Image src={imgDot} alt="" />
          </StyledPaginationButton>
        );
      })}
    </StyledPagination>
  );
};

//---------------------------------

const StyledCarousel = styled(CarouselComponent)`
  gap: 2rem;

  .rec-arrow {
    background-color: #fff;
    pointer-events: all !important;
    cursor: pointer !important;
  }
`;

const Carousel: React.FC<{
  className?: string;
  itemList: any[];
  showArrows?: boolean;
  enableAutoPlay?: boolean;
  showDots?: boolean;
}> = ({
  className,
  itemList,
  showArrows = true,
  enableAutoPlay = false,
  showDots = true,
}) => {
  const carouselRef = React.useRef<any>(null);

  const onNextStart = useCallback((currentItem: any, nextItem: any) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  }, []);

  const onPrevStart = useCallback(
    (currentItem: any, nextItem: any) => {
      if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo(itemList.length);
      }
    },
    [itemList.length]
  );

  return (
    <StyledCarousel
      ref={carouselRef}
      isRTL={false}
      disableArrowsOnEnd={false}
      className={className}
      showArrows={showArrows}
      renderPagination={showDots ? renderPagination : () => <></>}
      enableAutoPlay={enableAutoPlay}
      onPrevStart={onPrevStart}
      onNextStart={onNextStart}
    >
      {itemList}
    </StyledCarousel>
  );
};

export default Carousel;
