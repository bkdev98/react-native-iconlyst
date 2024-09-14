import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="m8.202 13.19-3.699.327A1.51 1.51 0 0 1 3 12a1.51 1.51 0 0 1 1.503-1.518l3.7.327c.65 0 1.179.533 1.179 1.19 0 .66-.528 1.191-1.18 1.191"
        opacity={0.4}
      />
      <Path d="M20.625 13.13c-.058.059-.274.305-.477.51-1.184 1.283-4.274 3.382-5.89 4.024-.246.102-.867.32-1.2.336a2 2 0 0 1-.91-.22 1.9 1.9 0 0 1-.808-.904c-.101-.262-.26-1.05-.26-1.064-.159-.86-.245-2.259-.245-3.805 0-1.472.086-2.814.216-3.688.014-.016.173-.993.347-1.328A1.82 1.82 0 0 1 13 6h.058c.433.014 1.343.394 1.343.408 1.53.642 4.548 2.639 5.761 3.966 0 0 .343.342.491.554.231.306.347.685.347 1.064 0 .423-.13.817-.375 1.138" />
    </G>
  </Svg>
);
export default IconlystArrowRightBulk;
