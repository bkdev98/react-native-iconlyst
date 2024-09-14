import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartBreakoutBoxLight = ({
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
      d="M15.337 4.54V3.12m3.732 2.425 1.005-1.005m.01 4.737h1.421M20.512 13.628V16.6c0 2.778-1.967 4.52-4.75 4.52H8.25c-2.783 0-4.75-1.734-4.75-4.52V8.629c0-2.787 1.967-4.522 4.75-4.522h2.512"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.022 8.804h3.789v3.79"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.495 13.87q.927.143 1.895.144a12.3 12.3 0 0 0 10.06-5.21"
    />
  </Svg>
);
export default IconlystChartBreakoutBoxLight;
