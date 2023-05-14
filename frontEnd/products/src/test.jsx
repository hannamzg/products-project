import { useEffect, useRef } from 'react';

function MyComponent() {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log(ref.current);
        console.log('Clicked outside!');
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref}>

    </div>
  );
}


export default MyComponent