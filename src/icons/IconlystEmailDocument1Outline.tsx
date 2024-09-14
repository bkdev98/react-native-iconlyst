import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailDocument1Outline = ({
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
      d="M17.787 14.01a.75.75 0 0 1-.75-.748l-.009-7.843a1.623 1.623 0 0 0-1.617-1.61H9.074a1.62 1.62 0 0 0-1.622 1.618v7.834a.75.75 0 1 1-1.5 0V5.427A3.12 3.12 0 0 1 9.07 2.309h6.337a3.13 3.13 0 0 1 3.117 3.1l.01 7.847a.75.75 0 0 1-.75.75z"
    />
    <Path
      fill={props.color}
      d="M12.267 10.125h-2.233a.75.75 0 1 1 0-1.5h2.233a.75.75 0 1 1 0 1.5m2.4-3.147h-4.633a.75.75 0 1 1 0-1.5h4.63a.75.75 0 1 1 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M7.713 21.69a4.94 4.94 0 0 1-3.569-1.45 5.85 5.85 0 0 1-1.64-4.192V10a5.394 5.394 0 0 1 4.05-5.52.75.75 0 1 1 .327 1.462A3.93 3.93 0 0 0 4.003 10v6.048a4.36 4.36 0 0 0 1.2 3.131 3.48 3.48 0 0 0 2.512 1.012h9.053a3.32 3.32 0 0 0 2.534-1.015 4.36 4.36 0 0 0 1.2-3.128V10a3.93 3.93 0 0 0-2.9-4.056.75.75 0 0 1 .327-1.464A5.4 5.4 0 0 1 22 9.999v6.048a5.84 5.84 0 0 1-1.643 4.19 4.96 4.96 0 0 1-3.579 1.454z"
    />
    <Path
      fill={props.color}
      d="M18.723 14.01H5.776a.75.75 0 1 1 0-1.5h12.947a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystEmailDocument1Outline;
