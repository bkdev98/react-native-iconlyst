import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCPULockBroken = ({
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
      d="M19.223 11.599v-2.35c0-2.285-1.418-3.9-3.703-3.9H8.982c-2.278 0-3.71 1.615-3.71 3.9v.67M19.223 14.762v.652c0 2.277-1.418 3.89-3.703 3.89H8.982c-2.285 0-3.71-1.613-3.71-3.89v-2.5M9.864 21.32v-2.021m4.773 2.02V19.3M5.27 9.943H3.249M5.27 14.71H3.249M21.25 9.943h-2.028m2.029 4.766h-2.03M9.864 5.351v-2.02m4.773 2.02v-2.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.864 15.79a1.373 1.373 0 0 1-1.373-1.375V12.86c0-.759.614-1.374 1.373-1.374h2.77c.758 0 1.373.615 1.373 1.374v1.555c0 .76-.615 1.374-1.374 1.374"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.902 11.517v-1.022a1.653 1.653 0 0 0-3.305-.008v1.03"
    />
  </Svg>
);
export default IconlystCPULockBroken;
