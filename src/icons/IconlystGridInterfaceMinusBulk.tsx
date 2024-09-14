import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceMinusBulk = ({
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
      <Path d="M19.302 13.5h-2.604A2.7 2.7 0 0 0 14 16.198v2.604a2.7 2.7 0 0 0 2.698 2.698h2.604A2.7 2.7 0 0 0 22 18.802v-2.604a2.7 2.7 0 0 0-2.698-2.698M8.302 13.5H5.698A2.7 2.7 0 0 0 3 16.198v2.604A2.7 2.7 0 0 0 5.698 21.5h2.604A2.7 2.7 0 0 0 11 18.802v-2.604A2.7 2.7 0 0 0 8.302 13.5M8.302 2.5H5.698A2.7 2.7 0 0 0 3 5.198v2.604A2.7 2.7 0 0 0 5.698 10.5h2.604A2.7 2.7 0 0 0 11 7.802V5.198A2.7 2.7 0 0 0 8.302 2.5" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.233 7.246h5.535a.75.75 0 0 0 0-1.5h-5.535a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGridInterfaceMinusBulk;
