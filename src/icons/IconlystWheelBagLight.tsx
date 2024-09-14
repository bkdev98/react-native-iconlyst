import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWheelBagLight = ({
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
      d="M18.999 11.252v4.684c0 2.292-1.304 3.72-3.594 3.72H8.6c-2.29 0-3.598-1.428-3.598-3.721v-4.683c0-2.292 1.308-3.719 3.598-3.719h6.806c2.29 0 3.594 1.433 3.594 3.719M8.602 16.25v-5.177M12.002 16.25v-5.177M15.408 16.25v-5.177M15.406 19.655V21M8.6 19.655V21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.035 7.533V4.631c0-.901-.73-1.631-1.63-1.631h-2.808c-.9 0-1.63.73-1.63 1.63v2.903"
    />
  </Svg>
);
export default IconlystWheelBagLight;
