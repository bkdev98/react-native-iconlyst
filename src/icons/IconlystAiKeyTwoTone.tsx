import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiKeyTwoTone = ({
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
      d="M21.5 12.176 19.525 10.2l-1.463 1.167-1.214-1.13-1.5 1.13-1.13-1.128h-1.493a4.814 4.814 0 1 0-.02 3.912l6.82-.001z"
      opacity={0.4}
    />
    <Circle
      cx={14.061}
      cy={5.555}
      r={1.224}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(180 14.061 5.555)"
    />
    <Circle
      cx={1.224}
      cy={1.224}
      r={1.224}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 17.928 19.668)"
    />
    <Circle
      cx={8.095}
      cy={12.158}
      r={1.516}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(-90 8.095 12.158)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.285 5.557h4.072M17.928 18.445h-4.073"
    />
  </Svg>
);
export default IconlystAiKeyTwoTone;
