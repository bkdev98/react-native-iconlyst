import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageHeartLight = ({
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
      d="m3.004 15.573 3.95-2.867a3.86 3.86 0 0 1 4.815.224l7.694 6.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.998 15.474c-.838-.77-2.145-1.999-3.92-1.043a28 28 0 0 0-2.174 1.316"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.95v5.023c0 2.944-1.843 5.021-4.788 5.021H7.778C4.833 20.994 3 18.917 3 15.973V8.026C3 5.08 4.843 3.004 7.778 3.004h3.274"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.521 5.727c.335-1.048-.056-2.245-1.156-2.599a1.88 1.88 0 0 0-1.697.285 1.89 1.89 0 0 0-1.695-.285c-1.098.354-1.494 1.55-1.158 2.599.522 1.659 2.853 2.938 2.853 2.938s2.313-1.26 2.853-2.938"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageHeartLight;
