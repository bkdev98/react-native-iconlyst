import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCivicBroken = ({
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
      d="M21.32 9.3C20.15 5.7 16.73 3 12.68 3c-4.95 0-9 4.05-9 9s4.05 9 9 9c4.05 0 7.47-2.61 8.55-6.3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.69 12.461a2.07 2.07 0 0 1-.997-1.764 2.072 2.072 0 1 1 4.144 0c0 .746-.396 1.393-.986 1.759v2.917h-2.16"
    />
  </Svg>
);
export default IconlystCivicBroken;
