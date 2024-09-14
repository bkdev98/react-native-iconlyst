import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImtokenBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.923 12.206c-.572.508-1.304.826-2.149.901-.863.075-1.679-.14-2.294-.608-.578-.439-.929-1.052-.986-1.727-.123-1.418.752-1.787.992-1.808.537-.042.831.155.87.596a1 1 0 0 1-.04.405 2 2 0 0 0-.063.75c.053.382.254.725.563.965.311.242.707.348 1.068.303.476-.04.935-.286 1.262-.675.277-.329.59-.922.504-1.877-.15-1.72-1.874-3.032-3.754-2.874-2.075.192-4.17 1.99-3.868 5.481.163 1.872 1.041 3.525 2.54 4.782 1.571 1.318 3.664 2.042 5.847 2.042q.435 0 .873-.039.774-.066 1.541-.249z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m13.83 18.574-2.907-6.368c.786-.698 1.27-1.754 1.334-3.035-.012-.608.473-1.079.709-1.305 1.166-1.104 4.871-3.273 8.325-2.55a1 1 0 0 1 .384.186c.188.155.252.391.27.485.547 7.382-3.588 11.509-8.115 12.587"
    />
  </Svg>
);
export default IconlystImtokenBulk;
