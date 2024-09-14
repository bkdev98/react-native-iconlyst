import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshSquare1Bulk = ({
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
      d="M16.217 2.75H7.783C4.623 2.75 2.5 4.971 2.5 8.276v7.948c0 3.305 2.124 5.526 5.284 5.526h8.433c3.16 0 5.283-2.221 5.283-5.526V8.276c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.602 17.306c1.396 0 2.74-.59 3.687-1.62a.75.75 0 1 0-1.106-1.015 3.497 3.497 0 0 1-6.074-2.358 3.497 3.497 0 0 1 3.493-3.493c1.458 0 2.69.871 3.218 2.13l-.815-.345a.751.751 0 0 0-.584 1.382l2.267.96a.75.75 0 0 0 .574.003.75.75 0 0 0 .408-.403l.963-2.279a.749.749 0 1 0-1.381-.584l-.177.42a4.95 4.95 0 0 0-4.473-2.784 5 5 0 0 0-4.993 4.993 5 5 0 0 0 4.993 4.993"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshSquare1Bulk;
