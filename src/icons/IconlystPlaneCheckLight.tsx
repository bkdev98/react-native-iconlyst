import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneCheckLight = ({
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
      d="M3.582 13.115c1.223-.508 3.638-1.545 4.881-2.062L6.183 5.53c.617-.22 1.182-.476 1.774-.618.692-.165 1.287.148 1.796.594a184 184 0 0 1 3.474 3.1c.289.265.516.29.86.138.993-.437 1.989-.873 3.007-1.242 1.179-.425 2.857-.469 3.273 1.017.33 1.172-.68 2.172-1.675 2.59a612 612 0 0 1-9.926 4.106c-2.366.95-4.24.12-5.244-2.234-.09-.211-.434-1.047-.522-1.26M4.895 20.38h7.38M15.357 18.413l1.844 1.846L21 16.46"
    />
  </Svg>
);
export default IconlystPlaneCheckLight;
