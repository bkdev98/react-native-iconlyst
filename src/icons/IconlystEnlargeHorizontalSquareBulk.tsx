import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnlargeHorizontalSquareBulk = ({
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
      d="m17.82 12.781-2.145 2.145a.746.746 0 0 1-1.061 0 .75.75 0 0 1 0-1.06l1.615-1.615-1.615-1.616a.75.75 0 1 1 1.061-1.06l2.145 2.145a.75.75 0 0 1 0 1.061m-5.07 4.231a.75.75 0 0 1-1.5 0V7.488a.75.75 0 1 1 1.5 0zm-3.366-3.147a.75.75 0 1 1-1.061 1.061l-2.145-2.145a.75.75 0 0 1 0-1.06l2.145-2.147a.75.75 0 1 1 1.061 1.061l-1.615 1.616z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEnlargeHorizontalSquareBulk;
