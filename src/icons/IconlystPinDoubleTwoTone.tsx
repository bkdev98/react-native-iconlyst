import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinDoubleTwoTone = ({
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
      d="M17.907 19.237c-.576 0-3.594-2.445-3.594-5.002a3.594 3.594 0 0 1 7.187 0c0 2.557-3.018 5.002-3.593 5.002"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.365 10.647a6.935 6.935 0 0 0-6.932-6.932A6.93 6.93 0 0 0 3.5 10.647c0 4.934 5.821 9.643 6.932 9.643.634 0 2.828-1.55 4.564-3.812"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.739 10.588a2.31 2.31 0 1 0-4.622 0 2.31 2.31 0 0 0 4.622 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.874 14.079v.046m.19-.036a.19.19 0 1 1-.381 0 .19.19 0 0 1 .38 0"
    />
  </Svg>
);
export default IconlystPinDoubleTwoTone;
