import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize6TwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.503 15.246 5.5 19.25m4.003-4.003-3.678.008m3.678-.008-.009 3.677"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.497 15.25 4.003 4.002m-3.996-.325-.008-3.677 3.677.008M9.503 9.253 5.5 5.25m3.996.325.008 3.677-3.677-.008"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.496 9.253 19.5 5.25m-4.003 4.003 3.678-.008m-3.678.008.01-3.677"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystResize6TwoTone;
