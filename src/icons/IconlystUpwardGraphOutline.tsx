import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpwardGraphOutline = ({
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
      d="M20.69 3.335a.75.75 0 0 1 0 1.061l-6.025 6.025a.75.75 0 0 1-1.06 0L10.52 7.337l-6.49 6.49a.75.75 0 1 1-1.06-1.061l7.02-7.02a.75.75 0 0 1 1.06 0l3.085 3.084 5.494-5.495a.75.75 0 0 1 1.06 0M17.835 11.561a.75.75 0 0 1 1.047 0l3.142 3.063a.75.75 0 0 1-1.047 1.074l-2.619-2.552-2.62 2.552a.75.75 0 0 1-1.046-1.075z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.357 11.349a.75.75 0 0 1 .75.75v8.27a.75.75 0 0 1-1.5 0V12.1a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpwardGraphOutline;
