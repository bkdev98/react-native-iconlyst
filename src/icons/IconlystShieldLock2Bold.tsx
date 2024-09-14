import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldLock2Bold = ({
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
      fillRule="evenodd"
      d="M11.349 10.313a.927.927 0 0 0 0 1.306.92.92 0 0 0 .566.274q.014-.003.029-.002.042 0 .084.005a.931.931 0 0 0 .633-1.585.936.936 0 0 0-1.312.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.719 12.683a2.4 2.4 0 0 1-1.025.614v1.533a.75.75 0 1 1-1.5 0v-1.573a2.4 2.4 0 0 1-.907-.579 2.4 2.4 0 0 1-.708-1.709c0-.646.252-1.256.709-1.717a2.44 2.44 0 0 1 3.43-.004l.005.004a2.43 2.43 0 0 1-.004 3.431m5.637-7.546C18.652 4.431 13.025 2.5 12 2.5S5.349 4.431 4.644 5.138c-.561.562-.553.995-.51 3.398.019.973.043 2.299.043 4.134 0 6.408 7.602 8.785 7.678 8.809a.487.487 0 0 0 .291 0c.076-.024 7.678-2.401 7.678-8.809 0-1.831.024-3.155.04-4.128.045-2.408.053-2.841-.508-3.405"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldLock2Bold;
