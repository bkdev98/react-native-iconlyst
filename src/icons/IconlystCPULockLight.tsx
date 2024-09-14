import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCPULockLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.022 15.369c0 2.277 1.425 3.89 3.71 3.89h6.538c2.285 0 3.703-1.613 3.703-3.89V9.208c0-2.285-1.418-3.9-3.703-3.9H8.732c-2.278 0-3.71 1.615-3.71 3.9zM14.387 21.279v-2.021m-4.773 2.02v-2.02zM5.02 14.668H2.999M5.02 9.902H2.999zM21 14.668h-2.028M21 9.902h-2.03zM14.387 5.31V3.29M9.614 5.31V3.29z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.383 15.748h-2.769a1.373 1.373 0 0 1-1.373-1.374V12.82c0-.759.614-1.374 1.373-1.374h2.77c.758 0 1.373.615 1.373 1.374v1.555c0 .76-.615 1.374-1.374 1.374"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.652 11.476v-1.023a1.653 1.653 0 0 0-3.305-.008v1.03"
    />
  </Svg>
);
export default IconlystCPULockLight;
