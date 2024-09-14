import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartDownwardVerticalOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.5 12.868a.25.25 0 0 1 .25.25v6.001a.25.25 0 0 1-.25.25h-4.25v-6.5zm1.75.25a1.75 1.75 0 0 0-1.75-1.75h-5a.75.75 0 0 0-.75.75v8.001c0 .415.335.75.75.75h5a1.75 1.75 0 0 0 1.75-1.75z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.5 8.868a.25.25 0 0 1 .25.25v10.25h-4.5v-10.5zm1.75.25a1.75 1.75 0 0 0-1.75-1.75h-5a.75.75 0 0 0-.75.75v12c0 .415.335.75.75.75h6a.75.75 0 0 0 .75-.75z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.5 4.868a.25.25 0 0 1 .251.25V19.37h-4.25a.25.25 0 0 1-.25-.25v-14a.25.25 0 0 1 .25-.25zm1.751.25a1.75 1.75 0 0 0-1.75-1.75h-4a1.75 1.75 0 0 0-1.75 1.75V19.12c0 .966.782 1.75 1.75 1.75h5a.75.75 0 0 0 .75-.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartDownwardVerticalOutline;
