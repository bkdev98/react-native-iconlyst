import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAutoFlashLight = ({
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
      d="m3.034 12.526 3.48-8.492a.54.54 0 0 1 .507-.354h4.666a.54.54 0 0 1 .51.72l-2.064 4.843a.54.54 0 0 0 .51.72h4.405a.54.54 0 0 1 .407.898L7.09 20.408c-.377.43-1.077.057-.93-.496l1.595-5.98a.54.54 0 0 0-.523-.68H3.541a.54.54 0 0 1-.507-.726M14.018 21.135l3.442-7.397 3.443 7.397m-5.63-2.589h4.375"
    />
  </Svg>
);
export default IconlystAutoFlashLight;
