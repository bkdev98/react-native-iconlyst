import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTiktokBulk = ({
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
      d="M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.511 9.693c.586.45 1.344.776 2.288.776a.75.75 0 0 0 0-1.5c-1.72 0-2.32-1.748-2.326-1.766a.75.75 0 0 0-1.462.236v6.841c0 .842-.686 1.529-1.53 1.529s-1.53-.687-1.53-1.529c0-.844.686-1.531 1.53-1.531a.75.75 0 0 0 0-1.5c-1.67 0-3.03 1.36-3.03 3.031a3.034 3.034 0 0 0 3.03 3.029c1.671 0 3.03-1.36 3.03-3.029z"
    />
  </Svg>
);
export default IconlystTiktokBulk;
