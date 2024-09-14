import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletSquareLight = ({
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
      d="M12 16.383a3.23 3.23 0 0 1-3.229-3.228V11.14a.64.64 0 0 1 .64-.64h5.177a.64.64 0 0 1 .64.64v2.015a3.23 3.23 0 0 1-3.229 3.228M12 16.388v4.749M10.316 10.5V8.659m3.368 1.841V8.659"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3.137h8.435c2.948 0 4.783 2.08 4.783 5.026v7.947c0 2.945-1.835 5.027-4.784 5.027H7.782C4.834 21.137 3 19.055 3 16.11V8.163c0-2.945 1.843-5.026 4.782-5.026"
    />
  </Svg>
);
export default IconlystPowerOutletSquareLight;
