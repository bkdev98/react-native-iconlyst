import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare6Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.356 21.249 5.35 18.243l3.006-2.997M15.654 3.25l2.997 2.997-2.997 2.997M11.723 18.242H5.35M18.652 12.25v1.89a4.104 4.104 0 0 1-4.104 4.104M12.355 6.246h6.297M5.35 12.249V10.35a4.104 4.104 0 0 1 4.104-4.104"
    />
  </Svg>
);
export default IconlystReplaySquare6Broken;
