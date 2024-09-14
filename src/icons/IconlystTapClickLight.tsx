import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapClickLight = ({
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
      d="M18.741 12.69c.904 2.44.015 5.669-1.569 7.252-2.02 2.021-7.668 2.175-9.517-.125-1.174-1.459-2.086-3.23-2.66-4.816-.309-.851.144-1.769.989-2.093a1.735 1.735 0 0 1 2.05.636l1.135 1.647V6.087a1.587 1.587 0 0 1 3.174-.024l.063 4.106c2.221.212 5.437.097 6.335 2.521"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.017 9.502C7.93 8.862 7.195 7.64 7.195 6.239c0-.48.086-.939.243-1.36M14.237 7a3.74 3.74 0 0 1-1.696 2.469M9.158 2.895a3.4 3.4 0 0 1 1.595-.395c1.222 0 2.3.647 2.94 1.632"
    />
  </Svg>
);
export default IconlystTapClickLight;
