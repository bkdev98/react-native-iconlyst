import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneWaveMusicBroken = ({
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
      d="M11.994 3H9.179a3.62 3.62 0 0 0-3.618 3.618v5.383M18.312 12.018v5.363a3.617 3.617 0 0 1-3.617 3.618H9.18a3.62 3.62 0 0 1-3.618-3.617V15.51M14.522 5.474v1.598M18.94 5.475v1.598M16.73 3.994v4.559"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.878 17.264v.023m.059-.259a.29.29 0 1 1-.003.58.29.29 0 0 1 .003-.58"
    />
  </Svg>
);
export default IconlystPhoneWaveMusicBroken;
