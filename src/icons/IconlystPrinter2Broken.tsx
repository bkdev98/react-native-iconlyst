import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPrinter2Broken = ({
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
      d="M3 10.295a3.33 3.33 0 0 1 3.33-3.32h11.35a3.324 3.324 0 0 1 3.32 3.32v4.015a3.32 3.32 0 0 1-3.32 3.32h-1.053M7.41 17.631H6.33A3.327 3.327 0 0 1 3 14.311M7.413 14.809v3.77a2.08 2.08 0 0 0 2.08 2.08h1.858"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.508 20.66a2.08 2.08 0 0 0 2.08-2.081v-3.77M17.465 14.809H6.537M17.661 10.55h-2.12M7.414 6.988V5.42a2.08 2.08 0 0 1 2.08-2.08h2.146M14.509 3.34a2.08 2.08 0 0 1 2.079 2.08v1.568"
    />
  </Svg>
);
export default IconlystPrinter2Broken;