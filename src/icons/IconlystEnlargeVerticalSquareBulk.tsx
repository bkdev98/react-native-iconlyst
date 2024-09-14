import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnlargeVerticalSquareBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.974 2.75H8.026C4.72 2.75 2.5 4.873 2.5 8.034v8.434c0 3.159 2.22 5.282 5.526 5.282h7.948c3.305 0 5.526-2.123 5.526-5.282V8.033c0-3.16-2.221-5.283-5.526-5.283"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.762 13H7.239a.75.75 0 1 1 0-1.5h9.523a.75.75 0 0 1 0 1.5m-2.088 5.072a.746.746 0 0 1-1.06 0l-1.616-1.615-1.615 1.615a.749.749 0 1 1-1.06-1.06l2.145-2.146a.77.77 0 0 1 1.061 0l2.145 2.146a.75.75 0 0 1 0 1.06M9.324 6.43a.75.75 0 0 1 1.06 0l1.615 1.614 1.615-1.614a.749.749 0 1 1 1.06 1.06L12.53 9.636a.75.75 0 0 1-1.061 0L9.324 7.49a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEnlargeVerticalSquareBulk;
