import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextFieldLight = ({
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
      d="M4.206 9.453v3.184M20.37 9.453v3.184M20.37 11.047H4.2M6.91 7.602v-1.47A3.133 3.133 0 0 1 10.043 3h4.484a3.13 3.13 0 0 1 3.132 3.133v1.469M17.66 14.2v3.667A3.13 3.13 0 0 1 14.525 21h-4.474a3.15 3.15 0 0 1-3.142-3.142v-3.659"
    />
  </Svg>
);
export default IconlystTextFieldLight;
