import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareCloudTwoTone = ({
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
      d="M8.282 3h8.435C19.665 3 21.5 5.081 21.5 8.026v7.948c0 2.945-1.835 5.026-4.784 5.026H8.282C5.334 21 3.5 18.919 3.5 15.974V8.026C3.5 5.081 5.343 3 8.282 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.733 11.05c-1.283.011-2.319.872-2.319 2.34a2.34 2.34 0 0 0 1.377 2.132c.341.138.682.192.94.192h5.534c.259 0 .6-.05.946-.189a2.34 2.34 0 0 0 1.375-2.136c0-1.467-1.037-2.328-2.32-2.34 0-.922-.722-2.768-2.766-2.768s-2.767 1.846-2.767 2.768"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareCloudTwoTone;
