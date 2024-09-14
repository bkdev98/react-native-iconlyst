import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBikeTwoTone = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.87 18.793a3.12 3.12 0 1 0 0-6.238 3.12 3.12 0 0 0 0 6.238M18.63 18.793a3.12 3.12 0 1 0 0-6.238 3.12 3.12 0 0 0 0 6.238"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.818 9.941h-5.92l-3.57 5.083M9.989 15.674h5.524M18.472 15.166l-2.706-9.02 2.208-.94M10.656 7.47H8.034M10.9 9.942 9.096 7.47"
    />
  </Svg>
);
export default IconlystBikeTwoTone;
