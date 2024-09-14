import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPrinterTwoTone = ({
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
      d="M7.91 17.63H6.83a3.326 3.326 0 0 1-3.33-3.32v-4.015a3.33 3.33 0 0 1 3.33-3.32h11.35a3.324 3.324 0 0 1 3.32 3.32v4.015a3.32 3.32 0 0 1-3.32 3.32h-1.053"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.912 14.809v3.77a2.08 2.08 0 0 0 2.08 2.08h5.015a2.08 2.08 0 0 0 2.08-2.08v-3.77"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.658 17.574h1.685M15.875 10.55h.01M18.107 10.55h.01M7.912 6.988V5.42a2.08 2.08 0 0 1 2.08-2.08h5.015a2.08 2.08 0 0 1 2.08 2.08v1.568"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.963 14.809H7.035"
    />
  </Svg>
);
export default IconlystPrinterTwoTone;
