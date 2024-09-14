import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxCheckOutline = ({
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
      d="M15.789 6.613a.75.75 0 0 1 .002 1.06l-3.29 3.303a.75.75 0 0 1-1.063 0L9.841 9.371a.75.75 0 1 1 1.064-1.058l1.065 1.071 2.758-2.769a.75.75 0 0 1 1.06-.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.768 21.96H8.334c-3.31 0-5.533-2.329-5.533-5.794V8.192c0-3.465 2.223-5.794 5.533-5.794h8.435c3.308 0 5.532 2.33 5.532 5.794v7.974c0 3.465-2.224 5.793-5.533 5.793M8.334 3.901c-2.45 0-4.033 1.686-4.033 4.294v7.974c0 2.608 1.583 4.293 4.033 4.293h8.434c2.45 0 4.033-1.685 4.033-4.293V8.192c0-2.608-1.583-4.294-4.032-4.294z"
    />
    <Path
      fill={props.color}
      d="M12.549 17.008a3.65 3.65 0 0 1-3.292-2.049 1.57 1.57 0 0 0-1.418-.883h-4.28a.75.75 0 1 1 0-1.5h4.28a3.07 3.07 0 0 1 2.763 1.72 2.169 2.169 0 0 0 3.893 0 3.07 3.07 0 0 1 2.764-1.72h4.29a.75.75 0 1 1 0 1.5h-4.284a1.57 1.57 0 0 0-1.42.884 3.65 3.65 0 0 1-3.296 2.048"
    />
  </Svg>
);
export default IconlystInboxCheckOutline;
