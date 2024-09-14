import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneAddPlusBold = ({
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
      fill={props.color}
      d="M15.155 6.622a.75.75 0 1 0 1.5 0v-1.17h1.17a.75.75 0 1 0 0-1.5h-1.17v-1.17a.75.75 0 1 0-1.5 0v1.17h-1.171a.75.75 0 1 0 0 1.5h1.17z"
    />
    <Path
      fill={props.color}
      d="M11.954 4.45c0-.5.084-.979.235-1.428.046-.137-.046-.305-.19-.305a4.163 4.163 0 0 0-4.158 4.16v4.22a4.13 4.13 0 0 0 1.213 2.95 4.14 4.14 0 0 0 2.944 1.227h.005a4.17 4.17 0 0 0 4.156-4.175V9.317a.43.43 0 0 0-.37-.414c-2.17-.333-3.835-2.19-3.835-4.453"
    />
    <Path
      fill={props.color}
      d="M12.75 19.084v2.134a.75.75 0 0 1-1.5 0v-2.134a7.9 7.9 0 0 1-4.885-2.313 7.92 7.92 0 0 1-2.322-5.644.75.75 0 0 1 .75-.748h.002a.75.75 0 0 1 .748.752 6.44 6.44 0 0 0 1.885 4.582 6.44 6.44 0 0 0 4.603 1.907c3.553-.024 6.434-2.93 6.426-6.489a.75.75 0 0 1 .748-.752h.002a.75.75 0 0 1 .75.748c.01 4.145-3.161 7.568-7.207 7.957"
    />
  </Svg>
);
export default IconlystMicrophoneAddPlusBold;
