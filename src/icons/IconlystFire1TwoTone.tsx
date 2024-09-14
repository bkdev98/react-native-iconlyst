import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFire1TwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.056 3c.391 3-.37 8.081-3.212 8.081C9.972 9.637 9.589 8.277 8.71 7c-.337.241-1.144.99-1.436 1.278-5.482 5.223-.614 14.13 6.682 12.533 5.571-.92 7.522-7.242 5.098-11.962C17.78 6.2 15.615 4.337 13.056 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.853 15.28c-1.127 2.193-.22 5.13 2.368 5.557 2.992.632 5.793-3.096 2.991-5.748-.482.529-1.556 2.108-1.815 1.8-1.271-1.51-.757-4.326-.757-4.326s-2.195 1.485-2.787 2.717"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFire1TwoTone;
