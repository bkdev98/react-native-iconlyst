import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasBulbLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.413 11.326.682 1.365a.46.46 0 0 0 .347.249l1.528.22a.453.453 0 0 1 .255.774l-1.105 1.062a.45.45 0 0 0-.133.402l.262 1.5a.46.46 0 0 1-.668.478l-1.365-.708a.47.47 0 0 0-.43 0l-1.365.708a.46.46 0 0 1-.669-.478l.261-1.5a.45.45 0 0 0-.131-.402l-1.107-1.062a.454.454 0 0 1 .255-.774l1.529-.22a.46.46 0 0 0 .346-.248l.684-1.366a.464.464 0 0 1 .824 0"
      clipRule="evenodd"
    />
    <Circle
      cx={12}
      cy={14.662}
      r={7.203}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.755 7.655V6.543a1.754 1.754 0 0 0-3.509 0v1.112M11.998 4.757V3.365"
    />
  </Svg>
);
export default IconlystChristmasBulbLight;
