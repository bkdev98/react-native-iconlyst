import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDFailBroken = ({
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
      d="M21.25 15.531v1.578a3.893 3.893 0 0 1-3.893 3.892h-1.289M3.25 15.531v1.577A3.893 3.893 0 0 0 7.143 21H8.4M3.25 8.47V6.892A3.893 3.893 0 0 1 7.143 3h1.289M21.25 8.47V6.892A3.893 3.893 0 0 0 17.357 3H16.1M15.689 7.621v.612M8.81 7.621v.612M8.81 16.379c2.316-1.903 4.608-1.94 6.878 0M12.719 8.936v1.97c0 .523-.163.857-.61 1.13l-.304.198"
    />
  </Svg>
);
export default IconlystFaceIDFailBroken;
