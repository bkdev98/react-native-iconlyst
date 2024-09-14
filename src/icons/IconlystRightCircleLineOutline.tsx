import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightCircleLineOutline = ({
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
      d="M7.3 8.524a.75.75 0 0 1 .75.75v5.451a.75.75 0 0 1-1.5 0v-5.45a.75.75 0 0 1 .75-.75M13.119 8.432a.75.75 0 0 1 1.06-.002l3.05 3.037a.75.75 0 0 1 .001 1.063l-3.05 3.04a.75.75 0 0 1-1.06-1.062l2.518-2.51-2.517-2.506a.75.75 0 0 1-.002-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.328 12a.75.75 0 0 1 .75-.75h6.623a.75.75 0 0 1 0 1.5h-6.623a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightCircleLineOutline;
