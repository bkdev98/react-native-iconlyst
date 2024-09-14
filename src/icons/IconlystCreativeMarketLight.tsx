import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCreativeMarketLight = ({
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
      strokeWidth={1.5}
      d="M10.917 3.822a2.8 2.8 0 0 1 2.123-.819l5.043.25a2.807 2.807 0 0 1 2.665 2.664l.249 5.043a2.8 2.8 0 0 1-.819 2.123l-6.82 6.821a3.74 3.74 0 0 1-5.293 0l-3.969-3.97a3.74 3.74 0 0 1 0-5.291z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.526 11.384 11.1 12.843m0 0-2.426 1.459m2.426-1.46.014 2.848m-.014-2.847-.015-2.847m.015 2.847 2.44 1.388m-2.44-1.388-2.44-1.388M16.944 7.036v.059m.238-.046a.24.24 0 1 1-.48 0 .24.24 0 0 1 .48 0"
    />
  </Svg>
);
export default IconlystCreativeMarketLight;
