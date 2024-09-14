import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFruitDrinkBulk = ({
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
      d="M6.463 5.883a.5.5 0 0 0-.395.807l7.133 9.18a.5.5 0 0 0 .788.001l7.186-9.18a.5.5 0 0 0-.394-.808z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.935 2.323a.75.75 0 0 1 .357.999l-3.033 6.394a.75.75 0 0 1-1.355-.643l3.032-6.394a.75.75 0 0 1 1-.356M13.595 14.618a.75.75 0 0 1 .75.75v4.879h1.33a.75.75 0 0 1 0 1.5H13.67a1 1 0 0 1-.15 0h-1.996a.75.75 0 0 1 0-1.5h1.32v-4.88a.75.75 0 0 1 .75-.75M8.598 4.023a3.03 3.03 0 0 1 .639 1.86H6.88a.7.7 0 0 0-.55 1.135l1.289 1.63a3.117 3.117 0 1 1 .979-4.625"
    />
  </Svg>
);
export default IconlystFruitDrinkBulk;
