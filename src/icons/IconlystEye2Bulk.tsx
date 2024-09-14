import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEye2Bulk = ({
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
      fillRule="evenodd"
      d="M12.002 15.82A3.827 3.827 0 0 1 8.176 12a3.83 3.83 0 0 1 3.826-3.83A3.83 3.83 0 0 1 15.829 12a3.83 3.83 0 0 1-3.827 3.82M12 4.397c-4.883 0-9.5 3.693-9.5 7.601 0 3.977 4.528 7.6 9.5 7.6s9.5-3.623 9.5-7.6c0-3.908-4.617-7.6-9.5-7.6"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.002 9.672a2.33 2.33 0 0 0-2.326 2.33 2.326 2.326 0 0 0 4.653 0 2.33 2.33 0 0 0-2.327-2.33"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEye2Bulk;
