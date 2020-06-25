import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/utils/themeContext';
import useCreateTagElements from '@/hooks/useCreateTagElements';
import WordCard1SVG from '@/public/work-card-1.svg';
// import useImagesObserver from '@/hooks/useImagesObserver';

export default function WorkCard1() {
  const { loaded } = useTheme();

  // const [isImageLoaded, setIsImageLoaded] = useState(false);
  useEffect(() => {
    // useImagesObserver(imageRef, setIsImageLoaded);
  }, []);

  const tags = ['reactHook', 'redux', 'materialUi', 'localStorage'];
  const { elements } = useCreateTagElements(tags);

  return (
    <div className="group col-span-12 bg-paper custom-border flex justify-center items-center hover:bg-opacityBlue">
      <div className="m-12 grid grid-cols-12 gap-8">
        <div className="col-span-6">
          <div>
            <WordCard1SVG />
          </div>
        </div>
        <div className="col-span-6">
          <ul className="flex flex-col justify-center h-full">
            <li className="mt-auto mb-auto text-primaryText">
              <span
                className={`font-bold text-xl inline-block font-body group-hover:bg-paper ${
                  !loaded && 'skeleton text-transparent'
                }`}
              >
                My Work Space
              </span>
            </li>
            <li>
              <ul className="flex flex-wrap">{elements}</ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
