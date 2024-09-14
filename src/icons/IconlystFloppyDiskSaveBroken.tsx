import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSaveBroken = ({
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
      d="M3 12.627v3.347C3 18.919 4.834 21 7.782 21h8.435C19.166 21 21 18.919 21 15.974V10.08c0-.624-.241-1.225-.674-1.675L15.85 3.743A2.42 2.42 0 0 0 14.105 3H7.782C4.842 3 3 5.08 3 8.026v1.356M13.904 8.1H8.373"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.979 20.94v-4.666c0-1.644 1.025-2.317 2.67-2.317h1.39M17.02 20.94v-4.666c0-1.644-1.027-2.317-2.67-2.317"
    />
  </Svg>
);
export default IconlystFloppyDiskSaveBroken;
