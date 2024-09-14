import * as React from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUbuntuTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Ellipse
      cx={17.258}
      cy={5.261}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={2.159}
      ry={2.081}
    />
    <Ellipse
      cx={5.159}
      cy={11.995}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={2.159}
      ry={2.081}
    />
    <Ellipse
      cx={17.264}
      cy={18.73}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={2.159}
      ry={2.081}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.267 4.48a8.36 8.36 0 0 0-4.058-.012M18.955 6.531a7.7 7.7 0 0 1 2.039 3.383M5.453 14.05a7.7 7.7 0 0 0 2.02 3.394M5.453 9.944a7.7 7.7 0 0 1 2.02-3.393M18.96 17.456A7.7 7.7 0 0 0 21 14.074M15.273 19.509a8.36 8.36 0 0 1-4.058.01"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUbuntuTwoTone;
