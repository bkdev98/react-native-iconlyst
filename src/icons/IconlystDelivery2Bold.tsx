import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery2Bold = ({
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
      d="M12.623 9.012a.75.75 0 0 1 .467-.001l1.848.601-.013-6.802a.3.3 0 0 0-.3-.3l-3.575.008a.3.3 0 0 0-.299.3l.008 6.809z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.18 17.23H8.09a.749.749 0 1 1 0-1.5h3.09c.42 0 .75.34.75.75 0 .42-.33.75-.75.75m11.15-9.22c-.01-1.64-.56-3.08-1.55-4.07-.94-.94-2.23-1.44-3.72-1.44h-.02l-.325.005a.3.3 0 0 0-.295.3l.02 7.835c0 .24-.11.47-.31.61a.76.76 0 0 1-.67.11l-2.6-.85-2.61.87q-.12.03-.24.03a.748.748 0 0 1-.75-.74l-.01-7.85a.3.3 0 0 0-.3-.3h-.34c-3.14.02-5.26 2.23-5.26 5.52v.02L3.37 16c0 1.59.49 2.95 1.42 3.95.96 1.02 2.28 1.55 3.84 1.55h.03l8.42-.02c3.16-.01 5.27-2.23 5.27-5.53z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDelivery2Bold;
