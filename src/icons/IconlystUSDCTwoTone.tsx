import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUSDCTwoTone = ({
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
      d="M12.5 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.75 9.75S14 9 13.25 9h-1.5a1.5 1.5 0 0 0 0 3h1.5a1.5 1.5 0 0 1 0 3h-1.5c-.75 0-1.5-.75-1.5-.75M12.5 7.5V9m0 6v1.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 17.813C8.376 17.14 6.488 14.708 6.488 12S8.376 6.86 11 6.188M14 6.188c2.624.671 4.512 3.104 4.512 5.812S16.624 17.14 14 17.813"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUSDCTwoTone;
