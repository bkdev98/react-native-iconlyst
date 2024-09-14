import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapRotateLight = ({
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
      d="M20.3 13.477c.265 2.698-1.485 5.718-3.5 6.895-2.31 1.35-6.275.636-8.393-1.155-1.353-1.144-2.67-2.726-3.446-3.72a1.84 1.84 0 0 1-.168-1.979 1.93 1.93 0 0 1 3.074-.489l.995.986a.634.634 0 0 0 1.059-.29l2.474-9.436a1.654 1.654 0 0 1 3.206.815L14.58 9.26c2.183.8 5.456 1.536 5.72 4.217M7.426 3.777l1.96.828-.825 1.949M2.91 7.984l.58 2.043 2.04-.59"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 10.04c.712-2.21 2.62-4.464 5.88-5.442"
    />
  </Svg>
);
export default IconlystTapRotateLight;
