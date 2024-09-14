import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInternetExplorerBulk = ({
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
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.722 2.5 8.03v7.939c0 3.308 2.123 5.531 5.282 5.531h8.434c3.161 0 5.284-2.223 5.284-5.531V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.011 13.279h4.533a.75.75 0 0 0 .747-.687c.22-2.562-1.389-4.714-3.743-5.008a4.44 4.44 0 0 0-3.208.934c-.917.724-1.517 1.775-1.646 2.883a.75.75 0 0 0 1.49.174c.083-.716.48-1.4 1.085-1.879.611-.483 1.375-.708 2.097-.623 1.482.185 2.29 1.429 2.423 2.706h-3.273a2 2 0 0 1 .313-.28.75.75 0 0 0-.872-1.221c-.898.643-1.452 1.655-1.48 2.708-.042 1.39.846 2.676 2.213 3.203.434.164.908.244 1.394.244.826 0 1.685-.232 2.435-.68a.75.75 0 1 0-.77-1.287c-.807.481-1.776.604-2.524.322-.683-.263-1.132-.853-1.214-1.509"
    />
  </Svg>
);
export default IconlystInternetExplorerBulk;
