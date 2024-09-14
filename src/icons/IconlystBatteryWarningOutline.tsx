import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBatteryWarningOutline = ({
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
      d="M7.65 6.03c.867-.893 2.107-1.338 3.583-1.338h3.35c1.459 0 2.682.447 3.536 1.342.85.89 1.244 2.127 1.244 3.532v7.319c0 1.408-.394 2.646-1.245 3.534-.855.893-2.078 1.335-3.536 1.331h-3.415c-1.459 0-2.683-.444-3.54-1.337-.851-.889-1.248-2.126-1.248-3.536V9.566c0-1.41.405-2.648 1.27-3.537m1.074 1.045c-.524.539-.845 1.362-.845 2.49v7.312c0 1.137.317 1.96.831 2.498.51.531 1.305.875 2.457.875h3.418c1.151.004 1.943-.339 2.45-.868.512-.536.828-1.36.828-2.497v-7.32c0-1.132-.316-1.957-.829-2.495-.508-.532-1.3-.878-2.451-.878h-3.35c-1.175 0-1.988.348-2.509.883"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.947 3.994c-.123.098-.261.294-.261.8v.8a.75.75 0 1 1-1.5 0v-.8c0-.795.233-1.496.82-1.969.553-.445 1.285-.575 2.03-.575h1.707c.734 0 1.46.131 2.005.58.579.474.805 1.174.805 1.964v.792a.75.75 0 1 1-1.5 0v-.792c0-.51-.138-.708-.256-.805-.15-.123-.455-.239-1.054-.239h-1.708c-.613 0-.93.116-1.088.244M12.871 9.81a.75.75 0 0 1 .75.75v2.913a.75.75 0 0 1-1.5 0V10.56a.75.75 0 0 1 .75-.75m0 5.394a.75.75 0 0 1 .75.75v.055a.75.75 0 0 1-1.5 0v-.055a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBatteryWarningOutline;
