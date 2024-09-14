import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindLight = ({
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
      d="M11.379 21c1.972-.269 5.976-1.842 8.814-5.95M5.473 17.005c4.64.06 13.686-6.435 6.457-5.841C13.686 10.75 17.364 6.17 18.462 3M20.702 8.442c-1.815 4.57-4.128 6.811-6.392 8.16M6.03 9.743c2.086-.64 4.92-2.395 6.696-5.838M3.623 13.856c1.166 0 4.155-.766 5.964-2.47M3.862 6.26C4.93 5.95 7.175 4.883 8.28 3.29"
    />
  </Svg>
);
export default IconlystWindLight;
