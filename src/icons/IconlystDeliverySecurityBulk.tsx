import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliverySecurityBulk = ({
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
      d="M13.775 15.293c-.02-1.25-.03-1.77.64-2.45.71-.69 4.18-1.83 4.99-1.83.252 0 .82.126 1.488.32a.305.305 0 0 0 .39-.29l-.008-3.47c0-1.64-.55-3.09-1.55-4.08-.94-.94-2.22-1.43-3.71-1.43h-.34a.3.3 0 0 0-.3.3l.02 7.84c0 .24-.12.46-.31.61a.75.75 0 0 1-.68.1l-2.59-.84-2.62.86a.6.6 0 0 1-.23.04.74.74 0 0 1-.75-.75l-.01-7.84a.3.3 0 0 0-.3-.3h-.34c-1.58.01-2.9.56-3.82 1.53s-1.45 2.35-1.45 4l.02 7.94c.01 1.59.5 2.96 1.43 3.95.95 1.02 2.28 1.56 3.84 1.56h.02l6.804-.019c.252 0 .395-.297.258-.508a5.4 5.4 0 0 1-.872-2.984c0-1.05-.01-1.76-.02-2.26"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.574 8.568a.75.75 0 0 1 .467-.001l1.848.6-.012-6.801a.3.3 0 0 0-.301-.3l-3.574.008a.3.3 0 0 0-.3.3l.008 6.809zM21.898 15.712c-.008.396-.019.966-.019 1.804 0 1.734-1.83 2.615-2.474 2.872-.644-.257-2.474-1.138-2.474-2.872 0-.843-.012-1.416-.02-1.814-.004-.214-.008-.407-.007-.535.524-.259 2.163-.827 2.476-.862.372.036 2.083.627 2.524.851.002.128-.002.332-.006.556m1.12-1.596c-.443-.444-3.069-1.31-3.613-1.31-.533 0-3.148.86-3.615 1.311-.402.405-.397.661-.378 1.615.007.391.02.955.02 1.784 0 3.21 3.601 4.341 3.755 4.387a.73.73 0 0 0 .436 0c.153-.046 3.756-1.178 3.756-4.387 0-.824.011-1.385.02-1.775.017-.948.022-1.203-.38-1.625"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliverySecurityBulk;
