import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFigmaOutline = ({
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
      d="M9 3.75a2.25 2.25 0 1 0 0 4.5h6a2.251 2.251 0 0 0 0-4.5zM5.25 6A3.75 3.75 0 0 1 9 2.25h6a3.75 3.75 0 1 1 0 7.5H9A3.75 3.75 0 0 1 5.25 6"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.001 2.25a.75.75 0 0 1 .75.75v12a.75.75 0 1 1-1.5 0V9.04L11.25 9l.001-6a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M11.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M9 9.75a2.25 2.25 0 0 0 0 4.501.75.75 0 0 1 0 1.5A3.75 3.75 0 0 1 9 8.25a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9 15.75A2.25 2.25 0 1 0 11.25 18v-2.25zM5.25 18A3.75 3.75 0 0 1 9 14.25h3a.75.75 0 0 1 .75.75v3a3.75 3.75 0 0 1-7.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFigmaOutline;
