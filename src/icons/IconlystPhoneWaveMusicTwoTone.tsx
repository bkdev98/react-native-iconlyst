import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneWaveMusicTwoTone = ({
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
      d="M12.244 3H9.429a3.62 3.62 0 0 0-3.618 3.618v10.764A3.62 3.62 0 0 0 9.43 21h5.515a3.617 3.617 0 0 0 3.617-3.619v-5.363"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.772 5.475v1.598M19.19 5.475v1.598M16.98 3.994v4.559M12.127 17.265v.023m.06-.259a.29.29 0 1 1-.003.579.29.29 0 0 1 .002-.579"
    />
  </Svg>
);
export default IconlystPhoneWaveMusicTwoTone;
