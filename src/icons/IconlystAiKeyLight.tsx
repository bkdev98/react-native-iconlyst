import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiKeyLight = ({
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
      d="M21 12.176 19.025 10.2l-1.463 1.167-1.214-1.13-1.5 1.13-1.13-1.128h-1.493a4.814 4.814 0 1 0-.02 3.912l6.82-.001z"
    />
    <Circle
      cx={13.561}
      cy={5.555}
      r={1.224}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(180 13.561 5.555)"
    />
    <Circle
      cx={1.224}
      cy={1.224}
      r={1.224}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 17.428 19.668)"
    />
    <Circle
      cx={7.595}
      cy={12.158}
      r={1.516}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(-90 7.595 12.158)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.785 5.557h4.072M17.428 18.445h-4.073"
    />
  </Svg>
);
export default IconlystAiKeyLight;
