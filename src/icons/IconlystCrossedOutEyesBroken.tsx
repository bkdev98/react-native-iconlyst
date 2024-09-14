import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossedOutEyesBroken = ({
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
      d="M14.051 14.389a1.8 1.8 0 1 0-3.602 0v.766a1.8 1.8 0 0 0 2.915 1.415M10.292 7.466 8.215 9.543m2.08.003L8.212 7.465M16.285 7.466l-2.078 2.077m2.08.003-2.08-2.081"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 3.002H8.031c-2.94 0-4.782 2.081-4.782 5.026v7.948c0 2.945 1.834 5.026 4.782 5.026h8.434c2.949 0 4.784-2.081 4.784-5.026V8.028c0-2.945-1.835-5.026-4.783-5.026L16.05 3"
    />
  </Svg>
);
export default IconlystCrossedOutEyesBroken;
