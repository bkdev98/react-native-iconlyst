import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPearHalfTwoTone = ({
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
      d="M12 20.997c4.644.136 7.887-4.688 5.166-8.668-.637-.931-2.328-2.1-2.328-4.048-.096-2.005-.993-3.247-2.838-3.247-1.684 0-2.839 1.072-2.839 3.247 0 1.808-1.69 3.117-2.327 4.048-2.722 3.98.522 8.804 5.166 8.668"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.544 3s-.592.977-.544 2.034v15.998M14.915 14.729v1.018M9.079 14.729v1.018"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPearHalfTwoTone;
