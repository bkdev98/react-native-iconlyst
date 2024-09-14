import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUSDCBroken = ({
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
      d="M14.75 9.75S14 9 13.25 9h-1.5a1.5 1.5 0 0 0 0 3h1.5a1.5 1.5 0 0 1 0 3h-1.5c-.75 0-1.5-.75-1.5-.75M12.5 7.5V9m0 6v1.5M11 17.813C8.376 17.14 6.488 14.708 6.488 12M7.089 9.41C7.846 7.852 9.262 6.634 11 6.189M14 6.188c2.215.567 3.906 2.388 4.379 4.572M18.058 14.264c-.71 1.714-2.2 3.073-4.058 3.55"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 21a9 9 0 1 1 4.172-1.023"
    />
  </Svg>
);
export default IconlystUSDCBroken;
