import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpOutlinecurved = ({
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
      d="M18.684 10.195a.75.75 0 0 1-1.32.711C16.35 9.025 14.358 6.195 12.75 5.44V19.5a.75.75 0 0 1-1.5 0V5.442c-1.61.757-3.6 3.584-4.615 5.464a.75.75 0 0 1-1.32-.711C5.67 9.534 8.88 3.75 12.002 3.75c3.12 0 6.327 5.784 6.682 6.445"
    />
  </Svg>
);
export default IconlystArrowUpOutlinecurved;
