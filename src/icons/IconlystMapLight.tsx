import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapLight = ({
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
      d="M7.782 3h8.434C19.164 3 21 5.081 21 8.026v7.947C21 18.918 19.164 21 16.215 21H7.782C4.834 21 3 18.92 3 15.973V8.026C3 5.081 4.843 3 7.782 3M8.762 8.21v12.518M3.055 8.21H20.99"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.215 13.81c0 1.905 2.25 3.726 2.677 3.726s2.678-1.82 2.678-3.726a2.677 2.677 0 1 0-5.355 0M14.893 13.795v-.01"
    />
  </Svg>
);
export default IconlystMapLight;
