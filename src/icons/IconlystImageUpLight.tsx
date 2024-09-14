import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageUpLight = ({
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
      d="M17.526 3v6.092M15.117 5.418 17.525 3l2.408 2.418M3.006 15.58l3.949-2.867a3.86 3.86 0 0 1 4.816.225l7.694 6.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 15.482c-.839-.77-2.145-1.999-3.92-1.043a28 28 0 0 0-2.174 1.316"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.958v5.022c0 2.945-1.843 5.022-4.787 5.022H7.778C4.833 21.002 3 18.925 3 15.98V8.033c0-2.945 1.843-5.021 4.778-5.021h3.56"
    />
  </Svg>
);
export default IconlystImageUpLight;