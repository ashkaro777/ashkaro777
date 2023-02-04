import React from "react";

import Carousel from "common/components/common/Carousel";
import TestimonyCard from "./components/TestimonyCard";
import { TESTIMONIES } from "./constants";

const TestimonyCarousel: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Carousel
      showDots={false}
      className={className}
      itemList={TESTIMONIES.map((t, i) => {
        return <TestimonyCard key={i} {...t} />;
      })}
    />
  );
};

export default TestimonyCarousel;
