import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinWalletOutline = ({
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
      d="M16.314 21.063h-5.306a.75.75 0 1 1 0-1.5h5.306a4.19 4.19 0 0 0 4.186-4.186v-6.75a4.19 4.19 0 0 0-4.186-4.19H8.186A4.19 4.19 0 0 0 4 8.625a.75.75 0 1 1-1.5 0 5.693 5.693 0 0 1 5.686-5.687h8.128A5.693 5.693 0 0 1 22 8.625v6.749a5.69 5.69 0 0 1-5.686 5.69"
    />
    <Path
      fill={props.color}
      d="M5.525 20.132H3.25a.75.75 0 0 1-.75-.75v-3.16a.75.75 0 0 1 .75-.75h2.207a2.387 2.387 0 0 1 2.387 2.1 2.33 2.33 0 0 1-2.319 2.557zM4 18.632h1.525a.83.83 0 0 0 .826-.913.875.875 0 0 0-.894-.746H4z"
    />
    <Path
      fill={props.color}
      d="M5.525 16.972H3.25a.75.75 0 0 1-.75-.75v-3.16a.75.75 0 0 1 .75-.75h2.207a2.386 2.386 0 0 1 2.387 2.1 2.33 2.33 0 0 1-2.319 2.557zM4 15.472h1.525a.83.83 0 0 0 .826-.913.875.875 0 0 0-.894-.746H4zM4.895 21.065a.75.75 0 0 1-.75-.75v-.932a.75.75 0 0 1 1.5 0v.932a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M4.895 13.81a.75.75 0 0 1-.75-.75v-.931a.75.75 0 0 1 1.5 0v.932a.75.75 0 0 1-.75.75M21.249 15.16h-3.807a3.281 3.281 0 0 1 0-6.562h3.807a.75.75 0 0 1 0 1.5h-3.807a1.782 1.782 0 1 0 0 3.563h3.807a.75.75 0 0 1 0 1.5"
    />
    <Path fill={props.color} d="M17.589 12.57h-.01a.75.75 0 1 1 .01 0" />
  </Svg>
);
export default IconlystBitcoinWalletOutline;
