import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpsideDownLight = ({
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
      d="M7.782 21h8.435C19.165 21 21 18.919 21 15.974V8.026C21 5.081 19.165 3 16.216 3H7.782C4.834 3 3 5.081 3 8.026v7.948C3 18.919 4.843 21 7.782 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.77 14.596v.052m-.046.153a.225.225 0 1 1 .003-.45.225.225 0 0 1-.003.45M15.23 14.596v.052m-.006.153a.225.225 0 1 1 .003-.45.225.225 0 0 1-.003.45M9.041 9.648c.72-.937 1.78-1.521 2.958-1.521 1.177 0 2.238.584 2.958 1.521"
    />
  </Svg>
);
export default IconlystUpsideDownLight;
