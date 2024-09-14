import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M12.005 2A4.99 4.99 0 0 1 17 6.774h-.026A.5.5 0 0 1 16.93 7h.156c1.217 0 2.492.844 3.003 2.88l.055.24.77 6.195c.553 3.95-1.609 5.612-4.558 5.683l-.198.002h-8.29c-2.996 0-5.305-1.092-4.798-5.416l.035-.27.778-6.194c.383-2.193 1.67-3.058 2.911-3.117L6.932 7h.078a.7.7 0 0 1 0-.226A4.99 4.99 0 0 1 12.005 2m-2.908 8.33a.897.897 0 0 0-.884.909c0 .502.396.91.884.91a.897.897 0 0 0 .884-.91l-.007-.114a.893.893 0 0 0-.877-.796m5.789 0a.897.897 0 0 0-.884.909c0 .502.396.91.884.91a.897.897 0 0 0 .884-.91.897.897 0 0 0-.884-.91m-2.92-7.028a3.48 3.48 0 0 0-3.484 3.472.7.7 0 0 1 0 .226h7.011a.7.7 0 0 1-.043-.226 3.48 3.48 0 0 0-3.484-3.472"
    />
  </Svg>
);
export default IconlystBagBold;