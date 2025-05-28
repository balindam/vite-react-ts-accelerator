import { useEffect, useRef } from "react";

/**
 * Custom hook to set the document title.
 * Automatically restores the original title when the component unmounts.
 * 
 * @param title - The title to set for the document.
 */
const useTitle = (title: string): void => {
  const isBrowser = typeof document !== "undefined";
  const originalTitle = useRef<string | null>(isBrowser ? document.title : null);

  useEffect(() => {
    if (!isBrowser || document.title === title) return;

    document.title = title;

    return () => {
      if (originalTitle.current !== null) {
        document.title = originalTitle.current;
      }
    };
  }, [title, isBrowser]);
};

export default useTitle;
