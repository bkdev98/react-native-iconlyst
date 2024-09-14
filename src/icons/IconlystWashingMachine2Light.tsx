import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWashingMachine2Light = ({
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
      d="M8.212 3h7.575c2.647 0 4.294 1.87 4.294 4.514v8.972c0 2.646-1.647 4.514-4.295 4.514H8.212c-2.647 0-4.295-1.868-4.295-4.514V7.514C3.917 4.869 5.573 3 8.212 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 11.234a3.366 3.366 0 1 1 0 6.732 3.366 3.366 0 0 1 0-6.732"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.688 15.141a2.45 2.45 0 0 1 1.412-.79 2.4 2.4 0 0 1 1.784.41c.35.25.671.431 1.152.431s.8-.181 1.151-.431a2.4 2.4 0 0 1 1.155-.432M3.918 8.481h16.165M16.428 6.03h.01M14.363 6.03h.01M7.54 6.03h1.923"
    />
  </Svg>
);
export default IconlystWashingMachine2Light;
