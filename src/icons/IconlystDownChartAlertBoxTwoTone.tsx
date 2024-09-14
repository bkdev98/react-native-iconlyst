import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownChartAlertBoxTwoTone = ({
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
      d="M14.916 3.908H8.105c-2.824 0-4.574 2-4.574 4.822v7.575c0 2.823 1.716 4.813 4.574 4.813h8.06c2.823 0 4.574-1.99 4.574-4.813V9.708"
      opacity={0.4}
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
export default IconlystDownChartAlertBoxTwoTone;
