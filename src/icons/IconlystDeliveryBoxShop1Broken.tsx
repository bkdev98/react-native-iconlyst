import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxShop1Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.825 12.547c-1.432-.003-2.327-1.018-2.323-2.453l.009-3.87c.004-1.433.899-2.444 2.335-2.44l4.106.01c1.436.002 2.326 1.018 2.323 2.452l-.01 3.869c-.002 1.434-.899 2.445-2.334 2.442"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.843 8.483-.924 6.381a1.75 1.75 0 0 1-1.736 1.504H8.569a1.75 1.75 0 0 1-1.752-1.608l-.234-2.79M3.856 3.247l2.024.35.469 5.582M8.147 20.245v.118m.48-.092a.482.482 0 1 1-.964 0 .482.482 0 0 1 .963 0M19.17 20.245v.118m.48-.092a.482.482 0 1 1-.964 0 .482.482 0 0 1 .964 0M12.852 6.75h1.957"
    />
  </Svg>
);
export default IconlystDeliveryBoxShop1Broken;
