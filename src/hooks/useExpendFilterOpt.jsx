import { useCallback, useEffect, useMemo, useState } from "react";

function useExpendFilterOpt(addTag, key) {
  const [showSelected, setShowSelected] = useState(false);

  const handleExpend = () => {
    setShowSelected((prev) => !prev);
  };

  const memoizeHandleSelectTag = useCallback(
    (e) => {
      const dataValue = e.target.dataset.value;

      addTag({ [key]: dataValue });

      const tags = Array.from(e.target.parentElement.children);
      tags.forEach((tag) => tag.classList.remove("bg-light-badge-btn"));
      e.target.classList.add("bg-light-badge-btn");
    },
    [addTag, key],
  );

  const filterOptions = useMemo(() => {
    return document.querySelectorAll("aside .filter-options li");
  }, []);
  useEffect(() => {
    filterOptions.forEach((el) => {
      el.addEventListener("click", memoizeHandleSelectTag);
    });

    return () => {
      filterOptions.forEach((el) =>
        el.removeEventListener("click", memoizeHandleSelectTag),
      );
    };
  }, [memoizeHandleSelectTag, filterOptions]);

  return {
    handleExpend,
    handleSelectTag: memoizeHandleSelectTag,
    showSelected,
  };
}

export default useExpendFilterOpt;
