import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorkBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M2 11.078c.05 2.339.19 6.338.21 6.779.071.942.432 1.895.994 2.567.782.944 1.745 1.364 3.088 1.364 1.856.01 3.902.01 5.89.01 1.994 0 3.93 0 5.565-.01 1.324 0 2.317-.431 3.09-1.364.561-.672.922-1.634.973-2.567.02-.372.12-4.712.18-6.779z"
        opacity={0.4}
      />
      <Path d="M11.245 15.384v1.294a.75.75 0 0 0 1.5 0v-1.294a.75.75 0 0 0-1.5 0" />
      <Path d="M13.286 2a2.95 2.95 0 0 1 2.92 2.581h1.977A3.81 3.81 0 0 1 21.99 8.39v3.466a.75.75 0 0 1-.336.626c-2.062 1.365-4.51 2.274-7.078 2.63a.75.75 0 0 1-.83-.558 1.805 1.805 0 0 0-1.756-1.354c-.842 0-1.557.545-1.779 1.357a.75.75 0 0 1-.827.545c-2.55-.356-4.989-1.26-7.047-2.62A.75.75 0 0 1 2 11.855V8.39c0-2.1 1.712-3.808 3.817-3.808h1.967a2.95 2.95 0 0 1 2.92-2.58Zm0 1.5h-2.582c-.673 0-1.235.46-1.403 1.081h5.387a1.456 1.456 0 0 0-1.402-1.08" />
    </G>
  </Svg>
);
export default IconlystWorkBulk;
