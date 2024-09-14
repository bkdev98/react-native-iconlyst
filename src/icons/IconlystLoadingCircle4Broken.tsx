import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle4Broken = ({
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
      d="m10.908 21 .01-.005M15.547 20.617l.006-.01M6.287 18.662l-.006.01M19.406 17.985l.006-.01M9.452 3.384l-.006.01M5.594 6.015l-.006.01M18.712 5.338l.006-.01M14.092 3l-.01.005M21.23 9.173l.005-.01M3.525 10.206l-.005.01M3.772 14.828l-.006.01M21.475 13.793l.005-.01"
    />
  </Svg>
);
export default IconlystLoadingCircle4Broken;
