import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodsLowBatteryBroken = ({
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
      d="M10.784 15.447v3.492a1.396 1.396 0 0 1-2.79 0v-5.516H6.988a3.94 3.94 0 0 1-3.126-1.537 1.84 1.84 0 0 1-.362-1.12V8.674c0-.403.121-.8.363-1.122a3.68 3.68 0 0 1 2.744-1.456c2.12-.097 4.177 1.74 4.177 3.86v2.246M6.055 9.167v1.222M21.5 16.423v1.828m-6.253-1.532v1.237m-.268 1.92h3.046c1.056 0 1.716-.591 1.716-1.678v-1.69c0-1.104-.66-1.708-1.716-1.708h-3.043c-1.06 0-1.716.595-1.716 1.68v1.718c-.003 1.087.654 1.677 1.713 1.677M14.022 12.697V6.863c0-2.12 2.056-3.957 4.176-3.86a3.68 3.68 0 0 1 2.744 1.456c.242.321.363.72.363 1.122v2.094c0 .402-.12.8-.361 1.119a3.94 3.94 0 0 1-3.126 1.537H16.81v1.563M18.75 6.075v1.22"
    />
  </Svg>
);
export default IconlystAirpodsLowBatteryBroken;
