import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUndrinkableWaterOutline = ({
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
      fillRule="evenodd"
      d="M12.614 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.864 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.17 6.16.444.603.446-.603a.75.75 0 0 0-.89 0m.444 1.57q-.152.132-.34.306a12 12 0 0 0-1.612 1.82.75.75 0 0 1-1.222-.87 13.7 13.7 0 0 1 1.812-2.048 14 14 0 0 1 .894-.761l.016-.012.005-.003.001-.002h.001l.445.603c.446-.603.445-.604.446-.603l.002.001.004.003.011.009.04.03q.052.039.141.111a14.41 14.41 0 0 1 1.954 1.925c1.046 1.254 2.18 3.092 2.151 5.193a4.1 4.1 0 0 1-.717 2.363.75.75 0 1 1-1.248-.833c.307-.46.476-.976.466-1.509v-.031c.025-1.569-.836-3.062-1.804-4.222a13 13 0 0 0-1.446-1.47M8.977 11.285a.75.75 0 0 0-.914.54 6 6 0 0 0-.198 1.608c-.023 1.3.605 2.45 1.486 3.253.877.8 2.063 1.313 3.264 1.3.368.004.734-.042 1.088-.129a.75.75 0 0 0-.359-1.456q-.364.09-.72.085h-.019c-.776.01-1.608-.33-2.243-.909-.633-.576-1.013-1.336-.997-2.123v-.032a4.6 4.6 0 0 1 .15-1.224.75.75 0 0 0-.538-.913"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.749 5.134a.75.75 0 0 1 1.06 0L19.48 17.805a.75.75 0 1 1-1.06 1.06L5.749 6.196a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUndrinkableWaterOutline;
