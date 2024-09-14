import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartGraphBroken = ({
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
      d="M12.5 3.284H7.527A4.03 4.03 0 0 0 3.5 7.314v5.456a4.03 4.03 0 0 0 4.028 4.029h9.943a4.03 4.03 0 0 0 4.029-4.03V7.314a4.03 4.03 0 0 0-4.03-4.029h-1.485M8.88 7.957v4.17m7.24-3.314v3.313m-3.425-1.958v1.959M7.557 20.715h9.888M10.384 16.8l-.637 3.918m4.869-3.917.637 3.917"
    />
  </Svg>
);
export default IconlystChartGraphBroken;
