import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownBold = ({
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
      d="m13.19 8.202.328-3.699C13.518 3.673 12.838 3 12 3a1.51 1.51 0 0 0-1.518 1.503l.327 3.7c0 .65.533 1.179 1.19 1.179.66 0 1.191-.528 1.191-1.18M13.13 20.624c.058-.058.305-.274.51-.477 1.283-1.184 3.382-4.274 4.024-5.89.102-.246.32-.867.336-1.2a2 2 0 0 0-.22-.91 1.9 1.9 0 0 0-.904-.808c-.262-.101-1.05-.26-1.064-.26-.86-.159-2.259-.245-3.805-.245-1.472 0-2.814.086-3.688.216-.016.014-.993.173-1.328.347A1.82 1.82 0 0 0 6 12.999v.058c.014.433.394 1.343.408 1.343.642 1.53 2.639 4.548 3.966 5.761 0 0 .342.343.554.491.306.231.685.347 1.064.347.423 0 .816-.13 1.138-.375"
    />
  </Svg>
);
export default IconlystDownBold;
