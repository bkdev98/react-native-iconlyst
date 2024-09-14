import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasGiftTwoTone = ({
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
      d="M8.396 7.434c-1.106 0-2.002-.927-2.002-2.07 0-1.144.896-2.072 2.002-2.072 2.802 0 3.602 4.142 3.602 4.142M15.601 7.434c1.105 0 2.001-.927 2.001-2.07 0-1.144-.896-2.072-2.001-2.072-2.802 0-3.603 4.142-3.603 4.142"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.873 21.291H7.127c-2.15 0-3.486-1.601-3.486-3.87v-6.118c0-2.268 1.336-3.87 3.487-3.87h9.745c2.15 0 3.486 1.602 3.486 3.87v6.118c0 2.269-1.344 3.87-3.486 3.87M11.998 7.433 9.77 10.791"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 7.433s.439 2.683 2.227 3.358"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 12.981v5.357m2.32-4.017L9.68 17m4.64 0-4.64-2.68"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChristmasGiftTwoTone;
