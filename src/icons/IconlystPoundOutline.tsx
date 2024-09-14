import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoundOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.53 11.111a.75.75 0 0 1 1.056.11 4.23 4.23 0 0 1 .21 5.05q-.41.53-.843 1.041h5.261a.75.75 0 0 1 0 1.5H9.266a.75.75 0 0 1-.542-1.269 27 27 0 0 0 1.867-2.166 2.73 2.73 0 0 0-.17-3.21.75.75 0 0 1 .11-1.056"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.019 6.296a4.223 4.223 0 0 1 5.95.532.75.75 0 1 1-1.151.962 2.724 2.724 0 0 0-4.227 3.436.75.75 0 0 1-1.177.93 4.224 4.224 0 0 1 .605-5.86"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.357 12.273a.75.75 0 0 1 .75-.75h6.95a.75.75 0 0 1 0 1.5h-6.95a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPoundOutline;
