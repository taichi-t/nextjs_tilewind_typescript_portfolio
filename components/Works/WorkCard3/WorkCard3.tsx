import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/utils/themeContext';
import useCreateTagElements from '@/hooks/useCreateTagElements';
export default function WorkCard2() {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const imgRef = useRef(null);
  const { loaded } = useTheme();
  const tags = ['typeScript', 'nextJs', 'tailwind'];
  const { elements } = useCreateTagElements(tags);
  useEffect(() => {
    if (imgRef.current.complete) setIsImgLoaded(true);
  }, []);

  const handleLoad = () => setIsImgLoaded(true);

  return (
    <div className="group col-span-5 bg-paper custom-border hover:bg-opacityGreen">
      <div className="m-8">
        <div
          className={`w-9/12 my-0 mx-auto mb-6 ${!isImgLoaded && 'skeleton'}`}
        >
          <img
            src="/pc.jpg"
            alt="pc"
            className={`w-auto h-auto max-w-full max-h-full ${
              !isImgLoaded && 'invisible'
            }`}
            width="100%"
            height="100%"
            ref={imgRef}
            onLoad={handleLoad}
          />
        </div>
        <ul>
          <li className="mb-5 text-primaryText">
            <span
              className={`font-bold text-xl inline-block font-body group-hover:bg-paper ${
                !loaded && 'skeleton text-transparent'
              }`}
            >
              Portfolio
            </span>
          </li>
          <li>
            <ul className="flex flex-wrap">{elements}</ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
