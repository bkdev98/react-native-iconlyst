import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUSDCLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.25 9.75S13.5 9 12.75 9h-1.5a1.5 1.5 0 0 0 0 3h1.5a1.5 1.5 0 0 1 0 3h-1.5c-.75 0-1.5-.75-1.5-.75M12 7.5V9m0 6v1.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.5 17.813C7.876 17.14 5.988 14.708 5.988 12S7.876 6.86 10.5 6.188M13.5 6.188c2.624.671 4.512 3.104 4.512 5.812s-1.888 5.14-4.512 5.813"
    />
  </Svg>
);
export default IconlystUSDCLight;
