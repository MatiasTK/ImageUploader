import { useEffect, useRef, useState } from 'react';

function Tooltip({ ...props }) {
  const [visibility, setVisibility] = useState(false);
  const tooltip = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const disableVisibility = (e: MouseEvent) => {
      if (tooltip.current && visibility && !tooltip.current.contains(e.target as Node)) {
        setVisibility(false);
      }
    };

    document.addEventListener('mousedown', (e) => disableVisibility(e));

    return () => document.removeEventListener('mousedown', (e) => disableVisibility(e));
  }, [visibility]);

  return (
    <div
      ref={tooltip}
      className="relative inline-block"
      role="button"
      tabIndex={0}
      onClick={() => setVisibility(true)}
      onKeyDown={() => setVisibility(true)}
    >
      {props.children}
      <span
        className={`bg-[#333333] text-white text-center rounded-md px-3 py-2 absolute z-10 bottom-[110%] left-[15%] after:border-4 after:border-t-[#333333] after:border-b-transparent after:border-l-transparent after:border-r-transparent after:absolute after:top-full after:left-2/4 ${
          visibility ? '' : 'after:invisible invisible'
        }`}
      >
        Copied!
      </span>
    </div>
  );
}
export default Tooltip;
