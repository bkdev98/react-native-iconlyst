import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageUpBroken = ({
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
      d="M17.525 2.998V9.09M15.117 5.416l2.408-2.418 2.408 2.418M3.006 15.58l3.949-2.867a3.86 3.86 0 0 1 4.816.225l7.694 6.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 15.483c-.839-.77-2.145-1.999-3.92-1.043a28 28 0 0 0-2.174 1.316M7.778 21.004C4.833 21.004 3 18.927 3 15.982V8.035C3 5.09 4.843 3.014 7.778 3.014h3.56"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.957v5.022c0 2.945-1.844 5.022-4.788 5.022H11.15"
    />
  </Svg>
);
export default IconlystImageUpBroken;
