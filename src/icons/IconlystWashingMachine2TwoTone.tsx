import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWashingMachine2TwoTone = ({
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
      d="M8.713 3h7.574c2.648 0 4.295 1.87 4.295 4.514v8.972c0 2.646-1.647 4.514-4.296 4.514H8.713c-2.648 0-4.295-1.868-4.295-4.514V7.514C4.418 4.869 6.073 3 8.713 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.188 15.141a2.45 2.45 0 0 1 1.412-.79 2.4 2.4 0 0 1 1.784.41c.35.25.671.431 1.152.431s.8-.181 1.151-.431a2.4 2.4 0 0 1 1.155-.432M4.418 8.481h16.165M16.928 6.03h.01M14.863 6.03h.01M8.04 6.03h1.923"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWashingMachine2TwoTone;
