import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLensShutterBroken = ({
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
      d="M3 12a9 9 0 0 0 9 9A9 9 0 1 0 3.524 8.966M14.079 8.4l5.166 8.946M12.769 8.4h7.484M7.842 11.998l5.167-8.945M9.92 15.599 4.755 6.652M14.079 15.6H6.664M16.158 12l-5.165 8.947"
    />
  </Svg>
);
export default IconlystLensShutterBroken;
