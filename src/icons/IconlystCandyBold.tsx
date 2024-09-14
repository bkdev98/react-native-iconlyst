import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandyBold = ({
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
      d="M20.283 6.738c.41-1.28.29-2.19-.36-2.71-.59-.47-1.49-.44-2.45.04-.7-.99-1.41-1.36-2.13-1.07-.808.32-1.175 1.407-1.232 2.558a.3.3 0 0 0 .202.293 7.07 7.07 0 0 1 4.255 4.211.3.3 0 0 0 .304.201c1.192-.104 2.34-.519 2.641-1.383.26-.75-.16-1.47-1.23-2.14M5.353 15.178a.3.3 0 0 0-.304-.192c-1.162.113-2.275.526-2.566 1.372-.25.75.16 1.47 1.23 2.14-.41 1.28-.29 2.19.36 2.71.59.47 1.49.44 2.45-.04.55.77 1.1 1.16 1.66 1.16.16 0 .32-.03.47-.09.837-.33 1.197-1.49 1.245-2.685a.3.3 0 0 0-.21-.293 7.07 7.07 0 0 1-4.335-4.082M14.5 12.62l-1.122.301.82.821a.75.75 0 0 1-1.06 1.061l-.821-.822-.301 1.123a.751.751 0 0 1-1.45-.388l.3-1.123-1.122.3a.751.751 0 0 1-.389-1.449l1.124-.301-.823-.822a.749.749 0 1 1 1.06-1.06l.823.822.3-1.123a.75.75 0 0 1 1.449.389l-.3 1.122 1.123-.3a.75.75 0 0 1 .389 1.449m-2.573-6.191a6.102 6.102 0 1 0 0 12.206 6.103 6.103 0 0 0 0-12.206"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCandyBold;
