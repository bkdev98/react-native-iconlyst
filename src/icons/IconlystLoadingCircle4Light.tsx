import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle4Light = ({
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
      d="m10.408 21 .01-.005M15.047 20.617l.006-.01M5.787 18.662l-.006.01M18.906 17.985l.006-.01M8.952 3.384l-.006.01M5.094 6.015l-.006.01M18.212 5.338l.006-.01M13.592 3l-.01.005M20.73 9.173l.005-.01M3.025 10.206l-.005.01M3.272 14.828l-.006.01M20.975 13.793l.005-.01"
    />
  </Svg>
);
export default IconlystLoadingCircle4Light;
