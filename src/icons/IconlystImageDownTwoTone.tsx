import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageDownTwoTone = ({
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
      d="M17.556 9.092V3m2.408 3.676-2.408 2.418-2.408-2.418"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.504 15.58 3.95-2.867a3.86 3.86 0 0 1 4.815.225l7.694 6.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.498 15.482c-.838-.77-2.145-1.999-3.92-1.043a28 28 0 0 0-2.174 1.316"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 10.958v5.022c0 2.945-1.843 5.022-4.788 5.022H8.278c-2.945 0-4.778-2.077-4.778-5.022V8.033c0-2.945 1.843-5.021 4.778-5.021h3.56"
    />
  </Svg>
);
export default IconlystImageDownTwoTone;
