import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectedCableSquareLight = ({
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
      d="M7.782 3.137h8.435c2.948 0 4.783 2.08 4.783 5.026v7.947c0 2.945-1.835 5.027-4.784 5.027H7.782C4.834 21.137 3 19.055 3 16.11V8.163c0-2.945 1.843-5.026 4.782-5.026"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.872 9.99 1.305-1.306a3.016 3.016 0 1 1 4.266 4.266l-1.305 1.305M15.446 8.683l4.117-4.117M14.127 14.281l-1.305 1.305a3.016 3.016 0 1 1-4.266-4.266l1.305-1.304M14.639 14.774 9.36 9.496M8.554 15.59 4.39 19.754M17.624 13.985l1.183.317M5.182 9.86l1.183.317M13.736 17.762l.434 1.145M9.82 5.254l.433 1.146"
    />
  </Svg>
);
export default IconlystConnectedCableSquareLight;
