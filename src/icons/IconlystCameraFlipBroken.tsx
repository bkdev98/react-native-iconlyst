import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraFlipBroken = ({
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
      d="m12.523 11.559 1.523-.773a3.092 3.092 0 0 0-5.14 2.319M11.476 14.654l-1.523.772a3.093 3.093 0 0 0 5.14-2.32"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 19.863H7.106A4.106 4.106 0 0 1 3 15.756v-5.642a3.06 3.06 0 0 1 3.062-3.058c.491-.02.955-.229 1.295-.585.182-.2.475-.698.742-1.181a2.23 2.23 0 0 1 1.954-1.153h3.912c.825 0 1.58.455 1.97 1.182.253.474.53.952.708 1.148.339.355.804.565 1.295.583A3.06 3.06 0 0 1 21 10.112v5.644a4.107 4.107 0 0 1-4.106 4.107h-1.746"
    />
  </Svg>
);
export default IconlystCameraFlipBroken;