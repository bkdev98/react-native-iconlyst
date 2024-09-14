import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUsernameBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M16.545 18.569C15.16 19.492 13.546 20 12 20c-.642 0-1.325-.095-1.784-.248a1 1 0 1 0-.633 1.896c.67.224 1.55.352 2.417.352 1.937 0 3.944-.628 5.654-1.768a1 1 0 1 0-1.109-1.664M2 12C2 6.487 6.486 2 12 2c5.607 0 10 4.393 10 10 0 2.794-1.453 4.6-3.7 4.6a3.68 3.68 0 0 1-2.941-1.479l-.692-6.854A.99.99 0 0 1 15.6 7.6a1 1 0 0 1 1 1v4.301c0 .953.747 1.699 1.7 1.699 1.534 0 1.7-1.818 1.7-2.6 0-4.486-3.514-8-8-8-4.411 0-8 3.589-8 8a1 1 0 1 1-2 0" />
    </G>
    <Path
      fill={props.color}
      d="M4.5 20.1a1 1 0 1 0 2 0v-1.5H8a1 1 0 1 0 0-2H6.5v-1.5a1 1 0 1 0-2 0v1.5H3a1 1 0 1 0 0 2h1.5z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 9.4A2.57 2.57 0 0 0 9.4 12a2.57 2.57 0 0 0 2.6 2.6c1.458 0 2.6-1.142 2.6-2.6S13.458 9.4 12 9.4m0 7.2A4.604 4.604 0 0 1 7.4 12c0-2.537 2.063-4.6 4.6-4.6s4.6 2.063 4.6 4.6a4.604 4.604 0 0 1-4.6 4.6"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAddUsernameBulk;
