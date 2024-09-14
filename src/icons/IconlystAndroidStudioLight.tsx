import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAndroidStudioLight = ({
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
      d="M15.083 7.438a3.083 3.083 0 1 0-6.165 0 3.083 3.083 0 0 0 6.165 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.627 12.672A9.86 9.86 0 0 0 12 17.312a9.87 9.87 0 0 0 8.373-4.64M17.348 21.002l-1.685-4.346M6.719 21.001l4.15-10.7M12 4.356V3M14.462 13.558 13.2 10.301"
    />
  </Svg>
);
export default IconlystAndroidStudioLight;
