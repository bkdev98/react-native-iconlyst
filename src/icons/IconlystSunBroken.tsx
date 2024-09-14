import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunBroken = ({
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
      d="M12.257 3.011v.032M5.913 5.65l.02.02m12.649 0 .045-.046m-6.37 15.366v-.032M5.913 18.35l.02-.02m-2.634-6.325H3.25m18 0h-.043m-2.625 6.325.045.046M7.327 11.994a4.924 4.924 0 1 0 .966-2.932"
    />
  </Svg>
);
export default IconlystSunBroken;
