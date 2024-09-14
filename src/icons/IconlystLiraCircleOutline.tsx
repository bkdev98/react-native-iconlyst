import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiraCircleOutline = ({
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
      d="M12.25 3.813A8.25 8.25 0 0 0 4 12.063a8.25 8.25 0 0 0 8.25 8.25 8.25 8.25 0 0 0 8.25-8.25 8.25 8.25 0 0 0-8.25-8.25m-9.75 8.25a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75 9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.01 7.398a.75.75 0 0 1 .75.75v4.523c0 1.225.993 2.218 2.22 2.218h1.402a.75.75 0 1 1 0 1.5H13.98a3.72 3.72 0 0 1-3.72-3.718V8.148a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.268 9.746a.75.75 0 0 1 .75-.75h4.646a.75.75 0 0 1 0 1.5H9.018a.75.75 0 0 1-.75-.75M8.268 12.13a.75.75 0 0 1 .75-.75h4.646a.75.75 0 1 1 0 1.5H9.018a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLiraCircleOutline;
