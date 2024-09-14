import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryCheckBulk = ({
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
      d="M19.487 12.25c.676 0 1.325.1 1.937.287.201.062.413-.084.413-.294L21.827 8c-.01-1.64-.56-3.08-1.55-4.07-.95-.94-2.23-1.43-3.72-1.43h-.339a.3.3 0 0 0-.3.3l.02 7.83c0 .24-.12.47-.31.61-.2.14-.44.18-.67.11l-2.6-.85-2.62.87a.71.71 0 0 1-.67-.11.72.72 0 0 1-.31-.6l-.01-7.846a.3.3 0 0 0-.305-.3l-.336.006c-3.15.01-5.26 2.22-5.26 5.51v.02l.01 7.94c.01 1.59.5 2.95 1.43 3.95.95 1.02 2.28 1.56 3.84 1.56h.02l4.684-.01c.213 0 .358-.216.29-.418a6.6 6.6 0 0 1-.344-2.112c0-3.7 3.01-6.71 6.71-6.71"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.119 9.003a.75.75 0 0 1 .466 0l1.848.6-.012-6.802a.3.3 0 0 0-.3-.3l-3.575.009a.3.3 0 0 0-.3.3l.008 6.808zM22.632 15.313a.75.75 0 0 0-1.061 0l-3.754 3.76-1.55-1.55a.751.751 0 0 0-1.061 1.06l2.08 2.08a.754.754 0 0 0 1.062 0l4.285-4.29a.75.75 0 0 0-.001-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryCheckBulk;
