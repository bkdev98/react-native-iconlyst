import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystActivityLightsharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m7.467 15.254 2.805-3.646 3.2 2.514 2.746-3.543"
    />
    <Circle
      cx={19.418}
      cy={5.336}
      r={1.802}
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M14.665 4.324H3.28v17.21h17.21v-11.41"
    />
  </Svg>
);
export default IconlystActivityLightsharp;
