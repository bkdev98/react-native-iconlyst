import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceWithTongueBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.5C7.261 2.5 3 6.762 3 12s4.261 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.234 14.059h-1.393v.719a2.345 2.345 0 0 1-2.34 2.343 2.346 2.346 0 0 1-2.344-2.343v-.72H8.763a.75.75 0 0 1 0-1.5h7.471a.75.75 0 0 1 0 1.5M8.532 8.339a.977.977 0 0 1 1.668.687.976.976 0 1 1-1.668-.687M15.032 8.339a.977.977 0 0 1 1.668.687.976.976 0 1 1-1.668-.687"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceWithTongueBulk;
