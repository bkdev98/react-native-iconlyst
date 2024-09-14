import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFocusFrameLight = ({
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
      d="M21 8.47V6.893A3.89 3.89 0 0 0 17.107 3H15.85M3 8.47V6.893A3.89 3.89 0 0 1 6.893 3h1.29M3 15.531v1.577A3.89 3.89 0 0 0 6.893 21H8.15M21 15.531v1.577A3.89 3.89 0 0 1 17.106 21h-1.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.944 11.998a2.943 2.943 0 1 1-5.887 0 2.944 2.944 0 0 1 5.887 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.004 16.988v-2.039M12.004 9.056V7.008M9.058 12.002H7.01M16.986 12.002h-2.039"
    />
  </Svg>
);
export default IconlystFocusFrameLight;
