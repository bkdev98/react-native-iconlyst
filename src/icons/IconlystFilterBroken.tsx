import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterBroken = ({
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
      d="M10.33 16.593h-6.3M13.14 6.9h6.301M6.363 4.5a2.355 2.355 0 0 1 2.363 2.346 2.355 2.355 0 0 1-2.363 2.347A2.355 2.355 0 0 1 4 6.846M20 16.554a2.354 2.354 0 0 0-2.362-2.346 2.355 2.355 0 0 0-2.364 2.346 2.355 2.355 0 0 0 2.364 2.346"
    />
  </Svg>
);
export default IconlystFilterBroken;
