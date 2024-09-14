import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStairsAscendBulk = ({
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
      d="M8.264 18.28a1.22 1.22 0 0 1-1.22 1.22H4.5c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25h16c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-3.208v2.181a1.22 1.22 0 0 1-1.22 1.22h-3.294v2.404a1.22 1.22 0 0 1-1.22 1.22H8.265z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.33 18.749a.75.75 0 0 0 .75.751l3.116-.006a.75.75 0 0 0-.003-1.5l-1.299.002 3.636-3.635a.75.75 0 0 0-1.06-1.06l-3.638 3.636.002-1.303a.75.75 0 0 0-1.5-.002z"
    />
  </Svg>
);
export default IconlystStairsAscendBulk;
