import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandles7Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.5 18.869a.75.75 0 0 1-.75-.75v-12a.75.75 0 0 1 1.5 0v12a.75.75 0 0 1-.75.75M10.5 15.869a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M14.5 20.869a.75.75 0 0 0 .75-.75v-16a.75.75 0 0 0-1.5 0v16c0 .414.336.75.75.75M18.5 17.869a.75.75 0 0 0 .75-.75v-10a.75.75 0 0 0-1.5 0v10c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.25 12.118a.75.75 0 0 0-.75-.75h-18a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCandles7Outline;
