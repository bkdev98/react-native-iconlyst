import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscordCircleLight = ({
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
      d="M10.493 11.992v.034m.138-.027a.14.14 0 1 1-.279 0 .14.14 0 0 1 .28 0M13.51 11.992v.034m.138-.027a.14.14 0 1 1-.279 0 .14.14 0 0 1 .279 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.465 8.11a9 9 0 0 0-1.853.527.96.96 0 0 0-.463.398A9.1 9.1 0 0 0 6.93 14.55c.065.65.815.955 1.377 1.183q.092.037.175.072c.882.375 1.305-.563 1.587-1.207a9 9 0 0 0 3.86 0c.282.644.705 1.582 1.588 1.207q.083-.035.174-.072c.562-.228 1.312-.532 1.377-1.183a9.1 9.1 0 0 0-1.218-5.515.96.96 0 0 0-.463-.398 9 9 0 0 0-1.853-.528l-.473.542h-2.124z"
    />
    <Circle
      cx={12}
      cy={12}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystDiscordCircleLight;
