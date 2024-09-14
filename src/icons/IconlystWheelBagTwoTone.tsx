import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWheelBagTwoTone = ({
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
      d="M19.499 11.252v4.684c0 2.292-1.304 3.72-3.594 3.72H9.1c-2.29 0-3.598-1.428-3.598-3.721v-4.683c0-2.292 1.308-3.719 3.598-3.719h6.806c2.29 0 3.594 1.433 3.594 3.719M9.102 16.25v-5.177M12.502 16.25v-5.177M15.908 16.25v-5.177"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.906 19.655V21M9.1 19.655V21M15.535 7.533V4.631c0-.901-.73-1.631-1.63-1.631h-2.808c-.9 0-1.63.73-1.63 1.63v2.903"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWheelBagTwoTone;
