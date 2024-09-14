import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleGridInterfaceBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M8.302 2.5H5.698A2.7 2.7 0 0 0 3 5.198v2.604A2.7 2.7 0 0 0 5.698 10.5h2.604A2.7 2.7 0 0 0 11 7.802V5.198A2.7 2.7 0 0 0 8.302 2.5M19.302 13.5h-2.604A2.7 2.7 0 0 0 14 16.198v2.604a2.7 2.7 0 0 0 2.698 2.698h2.604A2.7 2.7 0 0 0 22 18.802v-2.604a2.7 2.7 0 0 0-2.698-2.698" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7 13.5c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4M18 10.5c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleGridInterfaceBulk;
