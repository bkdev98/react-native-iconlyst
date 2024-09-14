import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceWithTongueBold = ({
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
      d="M15.759 14.066h-1.403v.729A2.36 2.36 0 0 1 12 17.15a2.357 2.357 0 0 1-2.353-2.355v-.729H8.239a.75.75 0 0 1 0-1.5h7.52a.75.75 0 0 1 0 1.5M8.032 8.339a.976.976 0 0 1 1.668.687.976.976 0 1 1-1.668-.687m6.5 0a.976.976 0 0 1 1.668.687.976.976 0 1 1-1.668-.687M16.217 2.5H7.782C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.123 5.526 5.282 5.526h8.434c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceWithTongueBold;
