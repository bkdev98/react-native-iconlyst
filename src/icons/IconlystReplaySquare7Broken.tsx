import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare7Broken = ({
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
      d="M20.998 15.898 18 18.895l-2.997-2.997M18.002 12.45v6.446M11.999 5.602h1.899a4.104 4.104 0 0 1 4.104 4.104M3 8.599l2.997-2.997 2.997 2.997M5.996 12.048V5.602M12 18.893h-1.9a4.104 4.104 0 0 1-4.104-4.104"
    />
  </Svg>
);
export default IconlystReplaySquare7Broken;
