import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareCloudLight = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.233 11.05c-1.283.011-2.319.872-2.319 2.34a2.34 2.34 0 0 0 1.377 2.132c.341.138.682.192.94.192h5.534c.259 0 .6-.05.946-.189a2.34 2.34 0 0 0 1.374-2.136c0-1.467-1.036-2.328-2.318-2.34 0-.922-.723-2.768-2.767-2.768s-2.767 1.846-2.767 2.768"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareCloudLight;
