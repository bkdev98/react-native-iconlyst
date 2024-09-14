import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneWaveMusicOutline = ({
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
      fill={props.color}
      d="M14.696 21.75H9.18a4.37 4.37 0 0 1-4.368-4.367V6.619A4.374 4.374 0 0 1 9.18 2.25h2.815a.75.75 0 1 1 0 1.5H9.18a2.873 2.873 0 0 0-2.868 2.869v10.764A2.87 2.87 0 0 0 9.18 20.25h5.515a2.864 2.864 0 0 0 2.868-2.868v-5.363a.75.75 0 1 1 1.5 0v5.363a4.37 4.37 0 0 1-4.369 4.368"
    />
    <Path
      fill={props.color}
      d="M14.52 7.825a.75.75 0 0 1-.75-.75v-1.6a.75.75 0 1 1 1.5 0v1.6a.75.75 0 0 1-.75.75M18.938 7.825a.75.75 0 0 1-.75-.75v-1.6a.75.75 0 1 1 1.5 0v1.6a.75.75 0 0 1-.75.75M16.73 9.302a.75.75 0 0 1-.75-.75V3.994a.75.75 0 1 1 1.5 0V8.55a.75.75 0 0 1-.75.753M11.933 18.358q-.204 0-.393-.077a1.044 1.044 0 0 1 .009-1.932q.189-.069.39-.072a1.04 1.04 0 0 1-.007 2.081"
    />
  </Svg>
);
export default IconlystPhoneWaveMusicOutline;
