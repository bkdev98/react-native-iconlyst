import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGasStationSquareTwoTone = ({
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
      d="M14.233 17.225V9.354c0-.984-.613-1.68-1.597-1.68H9.818c-.982 0-1.597.696-1.597 1.68v7.871M7.802 17.225h6.85M17.607 9.466l-.882.881v3.666a.55.55 0 0 1-.548.549H14.37M8.28 12.006h5.931"
    />
    <Rect
      width={18}
      height={18}
      x={3.25}
      y={3.514}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
      rx={5}
    />
  </Svg>
);
export default IconlystGasStationSquareTwoTone;