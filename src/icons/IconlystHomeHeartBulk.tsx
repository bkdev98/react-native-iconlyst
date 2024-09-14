import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeHeartBulk = ({
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
      fill={props.color}
      d="m20.489 7.625-5.573-4.539a3.72 3.72 0 0 0-4.692-.001l-5.571 4.54a3.68 3.68 0 0 0-1.37 2.872v7.18a4.075 4.075 0 0 0 4.071 4.07h10.431a4.075 4.075 0 0 0 4.072-4.07v-7.18a3.68 3.68 0 0 0-1.368-2.872"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.224 15.676a4.9 4.9 0 0 0 1.155-1.851c.519-1.632-.247-3.285-1.744-3.762a2.78 2.78 0 0 0-2.066.148 2.78 2.78 0 0 0-2.067-.148c-1.497.477-2.262 2.13-1.735 3.781a4.8 4.8 0 0 0 1.154 1.828 12.3 12.3 0 0 0 2.26 1.747c.1.06.224.087.352.087.18 0 .369-.053.509-.139a12.6 12.6 0 0 0 2.182-1.691m-2.201-3.992a1.28 1.28 0 0 1 1.156-.191c.807.256.999 1.159.777 1.858-.164.47-.44.908-.785 1.256-.494.479-1.032.909-1.602 1.284a10.5 10.5 0 0 1-1.597-1.289 3.25 3.25 0 0 1-.783-1.232c-.228-.718-.037-1.621.768-1.877a1.27 1.27 0 0 1 1.158.191.75.75 0 0 0 .908 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeHeartBulk;
