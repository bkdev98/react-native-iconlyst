import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiListGeneratedTwoTone = ({
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
      d="M3 19.148h7.118M3 14.383h4.432M3 4.852h18M3 9.617h7.011"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.512 17.619-.146-.393a5.41 5.41 0 0 0-3.195-3.2l-.392-.146.392-.145a5.41 5.41 0 0 0 3.195-3.2l.146-.393.145.393a5.41 5.41 0 0 0 3.195 3.2l.393.146-.393.145a5.41 5.41 0 0 0-3.195 3.2zM19.823 19.147a1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.179 1.77 1.77 0 0 0 1.176 1.178 1.77 1.77 0 0 0-1.176 1.179"
    />
  </Svg>
);
export default IconlystAiListGeneratedTwoTone;
