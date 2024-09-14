import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSaturnBulk = ({
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
    <Circle
      r={7.338}
      fill={props.color}
      opacity={0.4}
      transform="matrix(-1 0 0 1 12.51 12)"
    />
    <Path
      fill={props.color}
      d="M3.623 6.474c.643-1.12 2.358-1.354 4.96-.662A6.6 6.6 0 0 0 7.161 6.99c-1.423-.244-2.135-.04-2.28.214-.108.195-.05.829.867 1.95q.19.263.467.555c1.287 1.393 3.236 2.874 5.477 4.17 2.241 1.297 4.492 2.242 6.354 2.66.068.01.126.03.194.04 1.794.37 2.505.078 2.641-.146.156-.273-.087-1.14-1.305-2.466.155-.546.243-1.11.263-1.705.117.03.224.097.311.185 1.96 1.949 2.651 3.586 1.988 4.717-.302.526-.964 1.052-2.416 1.052-.546 0-1.209-.078-1.998-.253a11 11 0 0 1-.711-.176c-1.842-.507-3.957-1.432-6.052-2.64-2.3-1.326-4.307-2.846-5.69-4.318-.04-.048-.089-.087-.128-.136-2.017-2.183-1.939-3.498-1.52-4.22"
    />
  </Svg>
);
export default IconlystSaturnBulk;
