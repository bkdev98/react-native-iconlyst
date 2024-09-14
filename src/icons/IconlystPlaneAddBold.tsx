import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneAddBold = ({
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
      d="M9.063 15.717a537 537 0 0 0 9.97-4.125c1.331-.561 2.56-1.893 2.112-3.495-.19-.682-.607-1.205-1.203-1.51-1.148-.59-2.522-.197-3.052-.004-1.063.374-2.083.825-3.124 1.255a218 218 0 0 0-3.495-3.121c-.802-.707-1.634-.963-2.469-.757-.457.108-.888.274-1.306.435q-.27.106-.554.208a.75.75 0 0 0-.442.993l2.002 4.85c-.489.208-1.055.449-1.627.69-.66.282-1.327.566-1.889.803l-.295-.711a.75.75 0 0 0-1.382.585l.525 1.26.048.11.01.025.031.068c.871 1.883 2.307 2.882 4.042 2.882.661 0 1.366-.145 2.098-.441M21 17.42h-1.38V16a.75.75 0 0 0-1.5 0v1.42h-1.378a.75.75 0 0 0 0 1.5h1.378v1.43a.75.75 0 0 0 1.5 0v-1.43H21a.75.75 0 0 0 0-1.5M13.282 19.45H4.9a.75.75 0 0 0 0 1.5h8.382a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneAddBold;
