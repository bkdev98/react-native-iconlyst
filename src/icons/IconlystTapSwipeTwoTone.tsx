import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapSwipeTwoTone = ({
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
      d="M4.258 8.359c.59-1.034 2.185-3.214 5.324-3.032M7.307 8.09c.41-.176 1.082-.227 1.713.255"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.8 13.477c.265 2.698-1.485 5.718-3.5 6.895-2.31 1.35-6.275.636-8.393-1.155-1.353-1.144-2.67-2.726-3.446-3.72a1.84 1.84 0 0 1-.168-1.979 1.93 1.93 0 0 1 3.074-.489l.995.986a.634.634 0 0 0 1.059-.29l2.474-9.436a1.654 1.654 0 0 1 3.206.815L15.08 9.26c2.183.8 5.456 1.536 5.72 4.217"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTapSwipeTwoTone;
