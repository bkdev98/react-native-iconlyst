import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlickrBold = ({
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
      d="M15.406 11.558h-.005a.94.94 0 0 0-.672.278.954.954 0 1 0 1.63.672.953.953 0 0 0-.953-.95"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.407 14.959a2.456 2.456 0 0 1-2.454-2.45 2.42 2.42 0 0 1 .714-1.732 2.43 2.43 0 0 1 1.739-.718 2.454 2.454 0 0 1 2.453 2.45c0 1.35-1.1 2.45-2.452 2.45m-6.324 0a2.456 2.456 0 0 1-2.454-2.45 2.43 2.43 0 0 1 .714-1.732 2.43 2.43 0 0 1 1.734-.718h.005a2.454 2.454 0 0 1 2.452 2.45c0 1.35-1.1 2.45-2.451 2.45m7.134-11.95H7.782c-3.16 0-5.282 2.222-5.282 5.53v7.94c0 3.307 2.122 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53v-7.94c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.082 11.558h-.005a.945.945 0 0 0-.948.948c0 .526.429.952.954.952a.951.951 0 1 0-.001-1.9"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlickrBold;
