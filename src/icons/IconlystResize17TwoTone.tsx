import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize17TwoTone = ({
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
      d="M3.5 16.468V8.033c0-2.948 2.081-4.783 5.026-4.783h7.948c2.945 0 5.026 1.835 5.026 4.783v8.435c0 2.948-2.081 4.782-5.026 4.782H8.526c-2.945 0-5.026-1.844-5.026-4.782"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.443 14.459 2.855-.006-.006 2.855M17.558 10.04l-2.855.006.006-2.855"
    />
  </Svg>
);
export default IconlystResize17TwoTone;
