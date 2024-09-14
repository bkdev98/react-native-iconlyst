import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowelHappyTwoTone = ({
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
      d="M10.263 8.23c3.611 0 6.538-1.17 6.538-2.615C16.8 4.171 13.874 3 10.263 3c-3.61 0-6.538 1.171-6.538 2.615s2.927 2.616 6.538 2.616"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.8 5.615v12.77C16.8 19.83 13.875 21 10.264 21s-6.538-1.17-6.538-2.615V5.615"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.14 5.46q1.141.31 2.26 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.06 12.085v.032M12.22 12.085v.032M8.416 15.49c.45.585 1.111.95 1.847.95.734 0 1.397-.365 1.847-.95"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.66 3.001h10.507c-.223.703-.726.948-.726 2.025 0 1.385.833 1.385.833 2.778s-.833 1.393-.833 2.779c0 1.392.833 1.392.833 2.785 0 1.386-.833 1.386-.833 2.778 0 1.107.524 1.336.74 2.068h-4.382"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTowelHappyTwoTone;
