import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWashingMachine1Light = ({
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
      d="M15.788 3H8.213C5.565 3 3.918 4.869 3.918 7.514v8.972C3.918 19.13 5.565 21 8.214 21h7.574c2.648 0 4.295-1.869 4.295-4.514V7.514C20.083 4.87 18.427 3 15.788 3M16.46 6.03h-1.923M20.081 8.482H3.916"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 11.234a3.365 3.365 0 1 0 0 6.73 3.365 3.365 0 0 0 0-6.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.688 15.141a2.45 2.45 0 0 1 1.412-.79 2.4 2.4 0 0 1 1.784.41c.35.25.671.431 1.152.431s.8-.181 1.151-.431a2.4 2.4 0 0 1 1.155-.432"
    />
  </Svg>
);
export default IconlystWashingMachine1Light;
