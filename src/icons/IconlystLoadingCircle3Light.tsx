import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle3Light = ({
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
      d="m5.81 18.588-.006.01M3.322 14.796l-.006.01M3.08 10.226l-.006.01M5.125 6.08l-.006.01M8.941 3.479l-.005.01M11.941 3a9 9 0 0 1 8.987 9.013 9 9 0 0 1-12.233 8.389"
    />
  </Svg>
);
export default IconlystLoadingCircle3Light;
