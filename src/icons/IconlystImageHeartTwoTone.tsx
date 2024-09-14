import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageHeartTwoTone = ({
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
      d="m3.504 15.573 3.95-2.867a3.86 3.86 0 0 1 4.815.224l7.694 6.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.498 15.474c-.838-.77-2.145-1.999-3.92-1.043a28 28 0 0 0-2.174 1.316"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 10.95v5.023c0 2.944-1.843 5.021-4.788 5.021H8.278c-2.945 0-4.778-2.077-4.778-5.021V8.026c0-2.945 1.843-5.022 4.778-5.022h3.274"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.021 5.727c.335-1.048-.056-2.245-1.156-2.599a1.88 1.88 0 0 0-1.697.285 1.89 1.89 0 0 0-1.695-.285c-1.098.354-1.493 1.55-1.158 2.599.522 1.659 2.853 2.938 2.853 2.938s2.313-1.26 2.853-2.938"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystImageHeartTwoTone;
