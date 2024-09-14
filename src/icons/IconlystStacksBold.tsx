import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStacksBold = ({
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
      d="M15.492 11.61H8.508a.75.75 0 0 1 0-1.5h1.734L9.023 7.96a.75.75 0 1 1 1.305-.74l1.595 2.814 1.594-2.814a.75.75 0 1 1 1.305.74l-1.219 2.15h1.889a.75.75 0 0 1 0 1.5m0 2.35h-1.853l1.182 2.079a.752.752 0 0 1-.651 1.121.75.75 0 0 1-.654-.38l-1.595-2.805-1.595 2.805a.75.75 0 0 1-1.305-.741l1.182-2.079H8.508a.75.75 0 0 1 0-1.5h6.984a.75.75 0 0 1 0 1.5m.725-11.46H7.782C4.623 2.5 2.5 4.722 2.5 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStacksBold;
