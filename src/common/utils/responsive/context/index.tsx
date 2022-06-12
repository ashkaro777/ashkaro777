import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { DEVICE_BREAKPOINT } from "../constants";

interface IResponsiveServiceContext {
  screenWidth: number;
  screenHeight: number;
  isScreenSmallerThanTablet: boolean;
}

const initialValues = {} as IResponsiveServiceContext;

export const ResponsiveServiceContext = createContext<
  IResponsiveServiceContext
>(initialValues);

export const useAppManager = () => {
  const context = useContext<IResponsiveServiceContext>(
    ResponsiveServiceContext
  );

  return context;
};

export const ResponsiveServiceProvider: React.FunctionComponent = ({
  children,
}) => {
  const [screenHeight, setScreenHeight] = useState(640);
  const [screenWidth, setScreenWidth] = useState(480);
  const isScreenSmallerThanTablet = screenWidth < DEVICE_BREAKPOINT.tablet;

  const screenListenerEvent = useCallback(() => {
    const screenWidth = window.innerWidth;
    setScreenWidth(screenWidth);

    const screenHeight = window.innerHeight;
    setScreenHeight(screenHeight);

    if (document) {
      const vw = screenWidth * 0.01;
      const vh = screenHeight * 0.01;

      document.documentElement.style.setProperty("--vw", `${vw}px`);
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  }, []);

  //----------|  SCREEN USE EFFECTS
  useEffect(() => {
    screenListenerEvent();
  }, [screenListenerEvent]);

  useEffect(() => {
    window.addEventListener("resize", screenListenerEvent);

    return () => {
      window.removeEventListener("resize", screenListenerEvent);
    };
  }, [screenListenerEvent]);

  return (
    <ResponsiveServiceContext.Provider
      value={{
        screenWidth,
        isScreenSmallerThanTablet,
        screenHeight,
      }}
    >
      {children}
    </ResponsiveServiceContext.Provider>
  );
};
