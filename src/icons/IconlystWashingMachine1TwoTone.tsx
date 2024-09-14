import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWashingMachine1TwoTone = ({
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
      d="M16.288 3H8.713C6.065 3 4.418 4.869 4.418 7.514v8.972C4.418 19.13 6.065 21 8.714 21h7.574c2.648 0 4.295-1.869 4.295-4.514V7.514C20.583 4.87 18.927 3 16.288 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.96 6.03h-1.923M20.581 8.482H4.416"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.498 11.234a3.365 3.365 0 1 0 0 6.73 3.365 3.365 0 0 0 0-6.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.188 15.141a2.45 2.45 0 0 1 1.412-.79 2.4 2.4 0 0 1 1.784.41c.35.25.671.431 1.152.431s.8-.181 1.151-.431a2.4 2.4 0 0 1 1.155-.432"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWashingMachine1TwoTone;
