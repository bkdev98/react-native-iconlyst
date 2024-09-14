import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHide3Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.908 7.886c-.6 1.28-1.42 2.39-2.41 3.29-.49.44-1.03.84-1.61 1.17a9.35 9.35 0 0 1-3.89 1.26 8.3 8.3 0 0 1-2 0 9.3 9.3 0 0 1-3.88-1.25 10 10 0 0 1-1.62-1.18c-.99-.9-1.81-2.01-2.41-3.29-.23-.5-.01-1.1.49-1.33s1.1-.01 1.33.49c1.31 2.85 4.03 4.62 7.09 4.62s5.78-1.77 7.09-4.62c.23-.5.83-.72 1.33-.49s.72.83.49 1.33"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="m7.118 12.356-2.31 3.16a1.01 1.01 0 0 1-1.4.22c-.44-.33-.54-.95-.21-1.4l2.3-3.16c.5.45 1.04.84 1.62 1.18M20.588 15.736c-.18.13-.38.19-.59.19a1 1 0 0 1-.81-.41l-2.3-3.17c.58-.33 1.12-.73 1.61-1.17l2.31 3.16c.33.45.23 1.07-.22 1.4M12.998 13.606v2.93c0 .55-.45 1-1 1s-1-.45-1-1v-2.93a8.3 8.3 0 0 0 2 0" />
    </G>
  </Svg>
);
export default IconlystHide3Bulk;
