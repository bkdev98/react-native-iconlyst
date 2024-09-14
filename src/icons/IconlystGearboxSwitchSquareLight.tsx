import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGearboxSwitchSquareLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.725 8.95v7.87M16.775 16.783v.011M16.72 8.95v2.81c0 .622-.503 1.125-1.124 1.125h-7.87M12.223 8.95v7.87"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.032 3.885h8.435c2.948 0 4.783 2.081 4.783 5.026v7.947c0 2.946-1.835 5.027-4.784 5.027H8.032c-2.948 0-4.782-2.081-4.782-5.027V8.911c0-2.945 1.843-5.026 4.782-5.026"
    />
  </Svg>
);
export default IconlystGearboxSwitchSquareLight;
