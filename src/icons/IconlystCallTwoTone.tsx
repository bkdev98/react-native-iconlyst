import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallTwoTone = ({
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
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M11.532 12.472c3.989 3.988 4.894-.625 7.434 1.913 2.448 2.448 3.856 2.938.753 6.04-.388.312-2.857 4.07-11.534-4.605C-.493 7.144 3.262 4.672 3.574 4.284c3.11-3.11 3.592-1.695 6.04.753 2.54 2.54-2.071 3.447 1.918 7.435" />
      <Path d="M14.353 6.043a4.43 4.43 0 0 1 3.5 3.5" opacity={0.4} />
    </G>
  </Svg>
);
export default IconlystCallTwoTone;
