import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize4Bulk = ({
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
      d="M15.974 2.75H8.026C4.721 2.75 2.5 4.873 2.5 8.033v8.434c0 3.16 2.221 5.283 5.526 5.283h7.948c3.305 0 5.526-2.123 5.526-5.283V8.033c0-3.16-2.221-5.283-5.526-5.283"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.002 8.001-.006 3.34a.75.75 0 0 1-.75.748h-.001a.75.75 0 0 1-.749-.751l.003-1.525-5.935 5.936 1.524-.003h.002a.75.75 0 0 1 .002 1.5l-3.34.006H7.75a.76.76 0 0 1-.53-.219.75.75 0 0 1-.22-.531l.007-3.342a.75.75 0 0 1 .75-.748h.002a.75.75 0 0 1 .748.751l-.003 1.525 5.934-5.935-1.524.003h-.002a.75.75 0 0 1-.002-1.5l3.34-.006h.002a.76.76 0 0 1 .53.219.75.75 0 0 1 .22.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize4Bulk;
