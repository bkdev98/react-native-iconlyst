import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShareBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M9.046 11.144a1 1 0 0 0 1.368.36l6.139-3.58a1.001 1.001 0 0 0-1.008-1.729l-6.14 3.581a1 1 0 0 0-.36 1.368M15.554 17.805a1 1 0 0 0 1.368-.36 1 1 0 0 0-.361-1.368l-6.146-3.583a1 1 0 0 0-1.368.36 1 1 0 0 0 .36 1.368z" />
    </G>
    <Path
      fill={props.color}
      d="M15.18 5.7c0 1.764 1.435 3.2 3.2 3.2s3.2-1.436 3.2-3.2-1.435-3.2-3.2-3.2a3.204 3.204 0 0 0-3.2 3.2M4.38 12a3.203 3.203 0 0 0 3.2 3.199c1.766 0 3.2-1.435 3.2-3.2 0-1.763-1.434-3.2-3.2-3.2a3.204 3.204 0 0 0-3.2 3.2M15.18 18.3c0 1.764 1.435 3.2 3.2 3.2s3.2-1.436 3.2-3.2-1.435-3.2-3.2-3.2a3.204 3.204 0 0 0-3.2 3.2"
    />
  </Svg>
);
export default IconlystShareBulk;
