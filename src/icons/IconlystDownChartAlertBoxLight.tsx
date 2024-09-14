import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownChartAlertBoxLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.916 3.908H8.105c-2.824 0-4.573 2-4.573 4.822v7.575c0 2.823 1.715 4.813 4.573 4.813h8.061c2.822 0 4.573-1.99 4.573-4.813V9.708"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.667 3.119a1.802 1.802 0 1 1 0 3.603 1.802 1.802 0 0 1 0-3.603"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.467 14.838-2.805-3.646-3.2 2.513-2.745-3.543"
    />
  </Svg>
);
export default IconlystDownChartAlertBoxLight;
