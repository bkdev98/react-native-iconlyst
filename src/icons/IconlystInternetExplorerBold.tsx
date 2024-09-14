import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInternetExplorerBold = ({
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
      d="M15.544 13.789h-4.533c.082.656.531 1.246 1.214 1.509.748.282 1.717.159 2.524-.322a.75.75 0 1 1 .77 1.287c-.75.448-1.609.68-2.435.68-.486 0-.96-.08-1.394-.244-1.367-.527-2.255-1.813-2.213-3.203.028-1.053.582-2.065 1.48-2.708a.75.75 0 0 1 .872 1.22 2 2 0 0 0-.313.28h3.273c-.134-1.276-.941-2.52-2.423-2.705-.722-.085-1.486.14-2.097.623-.606.479-1.002 1.163-1.085 1.879a.75.75 0 0 1-1.49-.174c.129-1.108.729-2.16 1.646-2.883a4.44 4.44 0 0 1 3.208-.934c2.354.294 3.962 2.446 3.743 5.008a.75.75 0 0 1-.747.687m.673-10.78H7.782C4.623 3.009 2.5 5.23 2.5 8.539v7.939c0 3.308 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInternetExplorerBold;
