import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare6TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.856 21.249 5.85 18.243l3.006-2.997M16.154 3.25l2.997 2.997-2.997 2.997"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.152 12.25v1.89a4.104 4.104 0 0 1-4.104 4.104H5.85M5.85 12.249V10.35a4.104 4.104 0 0 1 4.104-4.104h9.198"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystReplaySquare6TwoTone;
