import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThetaNetworkBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.394 15.785c-.137 1.404-1.207 2.369-2.55 2.369h-3.78a2.46 2.46 0 0 1-2.46-2.46v-7.38c0-1.402 1.058-2.46 2.46-2.46h3.87a2.463 2.463 0 0 1 2.46 2.46zM12 2.505c-5.238 0-9.5 4.26-9.5 9.5 0 5.238 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.348 12.604h-2.7a.75.75 0 0 0 0 1.5h.6v1.05a.75.75 0 0 0 1.5 0v-1.05h.6a.75.75 0 0 0 0-1.5M13.348 9.904h-.6v-1.05a.75.75 0 0 0-1.5 0v1.05h-.6a.75.75 0 0 0 0 1.5h2.7a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThetaNetworkBold;
