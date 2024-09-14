import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowerLight = ({
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
      d="M12.389 15.506a2.802 2.802 0 1 0 0-5.603 2.802 2.802 0 0 0 0 5.603"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.862 14.021c1.375.695 2.98 1.62 3.675 2.518a2.53 2.53 0 0 1-4 3.097c-.695-.9-1.206-2.695-1.535-4.2M9.893 14c-1.375.696-2.987 1.64-3.683 2.539a2.532 2.532 0 0 0 2.319 4.057 2.53 2.53 0 0 0 1.681-.96c.696-.9 1.207-2.695 1.536-4.2M10.325 10.796C9.21 9.731 7.783 8.528 6.703 8.173a2.528 2.528 0 1 0-1.584 4.802c1.08.356 2.943.238 4.472.047M14.441 10.796c1.115-1.065 2.542-2.268 3.622-2.623a2.527 2.527 0 1 1 1.585 4.802c-1.08.356-2.944.238-4.473.047M11.216 10.16c-.662-1.392-1.341-3.11-1.341-4.247 0-.67.267-1.313.74-1.788a2.533 2.533 0 0 1 3.578 0c.474.475.74 1.118.74 1.788 0 1.138-.681 2.869-1.343 4.26"
    />
  </Svg>
);
export default IconlystFlowerLight;
