import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinSwapBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.012 21a4.01 4.01 0 1 0-2.702-1.047M12.977 7.01a4.01 4.01 0 1 0 1.437-3.077M3.002 8.393A5.394 5.394 0 0 1 8.395 3l-.64 1.723M20.997 15.545a5.394 5.394 0 0 1-5.393 5.393l.64-1.723"
    />
  </Svg>
);
export default IconlystCoinSwapBroken;
