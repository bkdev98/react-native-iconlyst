import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReelsVideoAiTwoTone = ({
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
      d="M12.468 20.55H7.776C4.977 20.55 3 18.8 3 16.007V7.994c0-2.8 1.976-4.544 4.775-4.544h8.449c2.798 0 4.776 1.744 4.776 4.545v3.93"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M16.524 3.456v7.193M16.525 9.023h4.476M7.477 3.456v17.086M7.476 9.023H3.001m4.475 5.953H3.001" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.277 15.094.106.287a3.95 3.95 0 0 0 2.331 2.335l.287.106-.287.106a3.95 3.95 0 0 0-2.331 2.335l-.106.287-.106-.287a3.95 3.95 0 0 0-2.332-2.335l-.286-.106.286-.106a3.95 3.95 0 0 0 2.332-2.335zM12.704 12.74c.18.593.643 1.057 1.235 1.237a1.86 1.86 0 0 0-1.235 1.237 1.86 1.86 0 0 0-1.235-1.237 1.86 1.86 0 0 0 1.235-1.236"
    />
  </Svg>
);
export default IconlystReelsVideoAiTwoTone;
