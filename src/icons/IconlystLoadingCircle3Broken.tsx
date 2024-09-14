import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle3Broken = ({
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
      d="m6.31 18.588-.006.01M3.822 14.796l-.006.01M3.58 10.226l-.006.01M5.625 6.08l-.006.01M9.441 3.479l-.005.01M12.441 3a9 9 0 0 1 8.988 9.013M9.195 20.402c1 .385 2.085.596 3.22.598a9 9 0 0 0 8.039-4.92"
    />
  </Svg>
);
export default IconlystLoadingCircle3Broken;
