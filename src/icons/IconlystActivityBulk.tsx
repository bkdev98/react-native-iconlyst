import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystActivityBulk = ({
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
    <G fill={props.color} fillRule="nonzero" transform="translate(2 2)">
      <Path d="M13.313 2q-.07.365-.07.738a4.024 4.024 0 0 0 4.027 4.021q.369-.002.73-.07v7.972C18 18.016 16.021 20 12.662 20H5.346C1.98 20 0 18.016 0 14.661V7.356C0 4.002 1.979 2 5.346 2Zm.121 5.994-.117.008a.73.73 0 0 0-.487.294l-2.41 3.1-2.743-2.16a.74.74 0 0 0-1.047.14l-2.954 3.81a.72.72 0 0 0-.159.457l.003.11a.738.738 0 0 0 1.36.32l2.471-3.196 2.744 2.151a.74.74 0 0 0 1.055-.131l2.858-3.688V9.19a.754.754 0 0 0-.14-1.045.73.73 0 0 0-.551-.144Z" />
      <Circle cx={17.5} cy={2.5} r={2.5} opacity={0.4} />
    </G>
  </Svg>
);
export default IconlystActivityBulk;
