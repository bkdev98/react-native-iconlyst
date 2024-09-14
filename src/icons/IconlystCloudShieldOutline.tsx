import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudShieldOutline = ({
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
      d="M5.685 18.11a.8.8 0 0 1-.309-.067A4.9 4.9 0 0 1 2.5 13.585 4.65 4.65 0 0 1 6.655 8.74a5.636 5.636 0 0 1 11.187 0A4.633 4.633 0 0 1 22 13.59a4.9 4.9 0 0 1-2.877 4.457.75.75 0 1 1-.619-1.367 3.4 3.4 0 0 0 2-3.09 3.2 3.2 0 0 0-3.354-3.392.75.75 0 0 1-.749-.75 4.147 4.147 0 1 0-8.294 0 .75.75 0 0 1-.744.75 3.22 3.22 0 0 0-3.359 3.391 3.4 3.4 0 0 0 2 3.091.75.75 0 0 1-.31 1.433z"
    />
    <Path
      fill={props.color}
      d="M12.25 20.77a.7.7 0 0 1-.217-.033c-.145-.044-3.563-1.114-3.563-4.165 0-.782-.011-1.313-.018-1.68-.018-.884-.024-1.151.37-1.544a10.1 10.1 0 0 1 3.429-1.252c1.211.204 2.374.63 3.432 1.256.389.392.383.66.366 1.546-.007.368-.018.9-.018 1.674 0 3.05-3.418 4.12-3.563 4.165a.7.7 0 0 1-.217.033m-2.308-6.376c0 .107 0 .254.009.467.008.374.019.914.019 1.71 0 1.6 1.669 2.41 2.279 2.652.608-.244 2.282-1.061 2.282-2.651 0-.792.01-1.33.018-1.7.005-.222.01-.374.01-.482a14.5 14.5 0 0 0-2.336-.792c-.78.204-1.543.47-2.281.796"
    />
  </Svg>
);
export default IconlystCloudShieldOutline;
