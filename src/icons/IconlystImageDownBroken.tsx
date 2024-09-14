import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageDownBroken = ({
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
      d="M17.056 9.09V2.998M19.464 6.674l-2.407 2.418-2.41-2.418M3.004 15.581l3.949-2.867a3.86 3.86 0 0 1 4.816.225l7.694 6.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.999 15.483c-.84-.77-2.145-1.999-3.92-1.043a28 28 0 0 0-2.175 1.316"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.959v5.023c0 2.944-1.843 5.021-4.788 5.021h-4.875M7.778 21.002C4.833 21.002 3 18.925 3 15.98V8.033c0-2.945 1.843-5.021 4.778-5.021h3.56"
    />
  </Svg>
);
export default IconlystImageDownBroken;
