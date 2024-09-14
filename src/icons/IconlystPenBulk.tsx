import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenBulk = ({
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
      d="M10.308 19.51a4.22 4.22 0 0 0 2.248-1.66l-5.822-3.951a4.23 4.23 0 0 0-.728 2.477c.026 1.045.218 3.01.855 3.444.637.433 2.493-.015 3.447-.31"
    />
    <Path
      fill={props.color}
      d="m18.362 9.532-5.806 8.318-5.822-3.951 5.858-8.394a3.518 3.518 0 1 1 5.77 4.027"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPenBulk;
