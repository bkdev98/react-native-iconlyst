import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger2Bulk = ({
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
      d="M11.64 10.409a1 1 0 0 1 .757 0l7.901 3.233A2.74 2.74 0 0 1 22 16.177v.653a2.74 2.74 0 0 1-2.739 2.74H4.74A2.74 2.74 0 0 1 2 16.83v-.65a2.74 2.74 0 0 1 1.705-2.537zm-7.18 5.085a.74.74 0 0 0-.46.686v.65c0 .409.331.74.74.74H19.26a.74.74 0 0 0 .739-.74v-.652c0-.301-.182-.571-.458-.684l-7.525-3.079z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.338 4.5a3.29 3.29 0 0 0-2.442 2.372c-.193.723-.077 1.303.316 1.583.505.36 1.231.182 1.478-.36.22-.488.135-.974.581-1.366.746-.655 1.94-.112 1.94.882 0 .584-.216.873-.932 1.25-.65.34-1.091.894-1.207 1.511-.027.144-.104.292-.17.327a72 72 0 0 1-1.753.732c-.897.367-1.7.713-1.786.768-.085.056-.21.219-.278.362-.306.644.177 1.43.878 1.431.159 0 .955-.285 2.155-.772l1.904-.773 1.89.773c1.277.522 1.97.815 2.153.815 1.1.056 1.55-1.259.747-1.798-.098-.105-.86-.366-1.937-.801-.952-.385-1.731-.716-1.73-.736.002-.048.25-.21.514-.374.397-.248.716-.456.99-.841 1.408-1.98.18-4.841-2.39-5.046a3.3 3.3 0 0 0-.921.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoatHanger2Bulk;
