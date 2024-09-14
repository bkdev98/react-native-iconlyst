import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZarinpalSquareTwoTone = ({
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
      d="M7.782 3h8.435C19.164 3 21 5.081 21 8.026v7.947c0 2.945-1.836 5.026-4.784 5.026H7.782C4.835 20.999 3 18.918 3 15.973V8.026C3 5.081 4.844 3 7.782 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.862 14.26a1.328 1.328 0 1 0 1.88 1.88l6.454-6.453a1.33 1.33 0 0 0-1.88-1.88zM13.876 15.871l1.994-1.993a.433.433 0 0 1 .74.306v1.994a.433.433 0 0 1-.433.433h-1.995a.433.433 0 0 1-.306-.74M8.132 10.124l1.994-1.994a.433.433 0 0 0-.307-.74H7.825a.433.433 0 0 0-.432.433v1.995c0 .385.465.578.739.306"
    />
  </Svg>
);
export default IconlystZarinpalSquareTwoTone;
