import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCPULockTwoTone = ({
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
      d="M5.522 15.369c0 2.277 1.425 3.89 3.71 3.89h6.538c2.285 0 3.703-1.613 3.703-3.89V9.208c0-2.285-1.418-3.9-3.703-3.9H9.232c-2.278 0-3.71 1.615-3.71 3.9z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.887 21.279v-2.021m-4.773 2.02v-2.02zM5.52 14.668H3.499M5.52 9.902H3.499zM21.5 14.668h-2.028M21.5 9.902h-2.03zM14.887 5.31V3.29m-4.773 2.02V3.29z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.883 15.748h-2.769a1.373 1.373 0 0 1-1.373-1.374V12.82c0-.759.614-1.374 1.373-1.374h2.77c.758 0 1.373.615 1.373 1.374v1.555c0 .76-.615 1.374-1.374 1.374"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.152 11.476v-1.023a1.653 1.653 0 0 0-3.305-.008v1.03"
    />
  </Svg>
);
export default IconlystCPULockTwoTone;
