import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuotationOpenBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 4.127 17"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.669 8.629a5.82 5.82 0 0 0-2.205 3.175c-.242.888-.246 1.906.284 2.658.51.72 1.49 1.071 2.34.836 1.551-.429 2.055-2.402 1.006-3.582a2.28 2.28 0 0 0-1.584-.755M9.215 8.629a5.82 5.82 0 0 0-2.206 3.175c-.241.888-.245 1.906.286 2.658a2.22 2.22 0 0 0 2.339.836c1.551-.429 2.055-2.402 1.007-3.582a2.28 2.28 0 0 0-1.584-.755"
    />
  </Svg>
);
export default IconlystQuotationOpenBroken;
