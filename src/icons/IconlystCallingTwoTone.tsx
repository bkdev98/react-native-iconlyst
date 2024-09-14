import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallingTwoTone = ({
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
      <Path
        d="M14.353 2.5a7.97 7.97 0 0 1 7.04 7.032M14.353 6.043a4.43 4.43 0 0 1 3.5 3.5"
        opacity={0.4}
      />
      <Path d="M11.032 12.472c3.989 3.988 4.893-.625 7.433 1.913 2.449 2.448 3.857 2.938.754 6.04-.389.312-2.858 4.07-11.535-4.605S2.762 4.672 3.074 4.284c3.11-3.11 3.593-1.695 6.041.753 2.54 2.54-2.072 3.447 1.917 7.435" />
    </G>
  </Svg>
);
export default IconlystCallingTwoTone;
