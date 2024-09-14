import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodsLowBatteryTwoTone = ({
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 10.767c0 .402.119.8.362 1.119a3.94 3.94 0 0 0 3.126 1.537h1.006v5.516a1.395 1.395 0 1 0 2.79 0V9.955c0-2.12-2.057-3.957-4.177-3.86a3.68 3.68 0 0 0-2.744 1.456A1.86 1.86 0 0 0 3.5 8.673zM6.055 9.167v1.222"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 16.423v1.828m-6.253-1.532v1.237m-.268 1.92h3.046c1.056 0 1.716-.591 1.716-1.678v-1.69c0-1.104-.66-1.708-1.716-1.708h-3.043c-1.06 0-1.716.595-1.716 1.68v1.718c-.003 1.087.654 1.677 1.713 1.677"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.022 12.697V6.863c0-2.12 2.056-3.957 4.176-3.86a3.68 3.68 0 0 1 2.744 1.456c.242.321.363.72.363 1.122v2.094c0 .402-.12.8-.361 1.119a3.94 3.94 0 0 1-3.126 1.537H16.81v1.563M18.75 6.075v1.22"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAirpodsLowBatteryTwoTone;
