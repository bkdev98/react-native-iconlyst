import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimeCircleOutlinecurved = ({
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
      d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17M2 12C2 6.477 6.478 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.522 2 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.66 7.096a.75.75 0 0 1 .75.75v4.11l3.793.061a.75.75 0 1 1-.025 1.5l-4.53-.074a.75.75 0 0 1-.737-.75V7.846a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimeCircleOutlinecurved;
