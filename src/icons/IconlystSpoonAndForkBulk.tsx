import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpoonAndForkBulk = ({
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
      d="M3.743 2.024a1 1 0 0 1 .96 1.039L4.5 8.252a2.243 2.243 0 0 0 4.486 0l-.202-5.19a1 1 0 0 1 1.998-.078l.204 5.21v.04a4.244 4.244 0 0 1-3.243 4.124V21a1 1 0 1 1-2 0v-8.642A4.245 4.245 0 0 1 2.5 8.195l.205-5.21a1 1 0 0 1 1.038-.96m3 0a1 1 0 0 1 1 1v4.782a1 1 0 1 1-2 0V3.023a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.842 4.2c.704-1.206 1.823-2.2 3.264-2.2s2.56.994 3.264 2.2c.718 1.232 1.13 2.867 1.13 4.62 0 2.215-1.377 4.244-3.395 4.756V21a1 1 0 0 1-2 0v-7.424c-2.017-.512-3.394-2.541-3.394-4.757 0-1.752.412-3.387 1.13-4.618"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSpoonAndForkBulk;
