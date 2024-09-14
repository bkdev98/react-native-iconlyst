import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartSymbolsTwoTone = ({
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
      d="M12.502 5.925a5.4 5.4 0 0 0-2.235-1.498c-3.302-1.17-6.387 1.17-6.735 4.45-.489 4.944 4.803 7.984 8.105 10.695.246.206.569.313.889.307"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.502 5.925a5.4 5.4 0 0 1 1.637-1.247c3.132-1.552 6.762.4 7.295 3.879.718 4.979-4.542 8.116-7.872 10.844-.311.256-.62.47-1.036.478"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHeartSymbolsTwoTone;
