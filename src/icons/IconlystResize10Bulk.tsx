import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize10Bulk = ({
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
      d="m17.255 8.056-2.301 2.302h1.258a.75.75 0 0 1 0 1.5h-3.069a.75.75 0 0 1-.75-.75v-3.07a.75.75 0 0 1 1.5 0v1.26l2.301-2.303a.75.75 0 1 1 1.061 1.061m-5.407 8.167a.75.75 0 0 1-1.5 0v-1.26l-2.302 2.301a.75.75 0 0 1-1.061 0 .75.75 0 0 1 0-1.06l2.3-2.3H8.029a.75.75 0 0 1 0-1.5h3.069a.75.75 0 0 1 .75.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize10Bulk;