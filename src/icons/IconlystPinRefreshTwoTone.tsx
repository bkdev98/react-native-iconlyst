import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinRefreshTwoTone = ({
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
      d="M4.974 10.527C4.974 15.882 11.295 21 12.5 21c1.204 0 7.526-5.118 7.526-10.473a7.526 7.526 0 1 0-15.052 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.68 7.766a3.2 3.2 0 0 1 1.818-.563 3.243 3.243 0 0 1 3.179 3.89l-1.556-.63M14.318 13.065a3.2 3.2 0 0 1-1.817.563 3.243 3.243 0 0 1-3.179-3.89l1.436.582"
    />
  </Svg>
);
export default IconlystPinRefreshTwoTone;
