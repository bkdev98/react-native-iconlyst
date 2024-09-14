import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHederaBulk = ({
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
      d="M16.717 2.5H8.282C5.122 2.5 3 4.722 3 8.03v7.94c0 3.308 2.122 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.85 16.26a.75.75 0 0 1-1.5 0v-1.98h-5.7v1.98a.75.75 0 0 1-1.5 0V7.74a.75.75 0 0 1 1.5 0v1.98h5.7V7.74a.75.75 0 0 1 1.5 0zm-1.5-3.48h-5.7v-1.56h5.7z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHederaBulk;
