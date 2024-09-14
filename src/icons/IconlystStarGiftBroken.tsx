import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarGiftBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.396 7.434c-1.106 0-2.002-.927-2.002-2.07 0-1.144.896-2.072 2.002-2.072 2.802 0 3.602 4.142 3.602 4.142M17.602 5.364c0-1.144-.896-2.072-2.001-2.072-2.802 0-3.603 4.142-3.603 4.142"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.377 21.291h5.496c2.142 0 3.486-1.601 3.486-3.87v-6.118c0-2.268-1.337-3.87-3.486-3.87H7.128c-2.15 0-3.487 1.602-3.487 3.87v6.118c0 2.269 1.336 3.87 3.486 3.87h.813M11.998 7.433 9.77 11.128"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 7.433s.439 2.952 2.227 3.695M12 18.202a3.84 3.84 0 0 0-2.557-2.557A3.84 3.84 0 0 0 12 13.088a3.84 3.84 0 0 0 2.557 2.557 3.8 3.8 0 0 0-1.16.583"
    />
  </Svg>
);
export default IconlystStarGiftBroken;
