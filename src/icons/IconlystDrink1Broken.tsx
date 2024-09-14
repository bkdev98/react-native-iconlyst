import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrink1Broken = ({
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.767 12.973c0-1.066.35-2.103.997-2.95l.316-.415c.646-.847.997-1.57.997-2.636V4.036C6.077 3.464 6.54 3 7.113 3H8.2c.572 0 1.036.464 1.036 1.036v2.936c0 1.065.35 1.789.997 2.636l.316.415c.646.847.997 1.884.997 2.95v6.42c0 .888-.72 1.607-1.607 1.607H5.373a1.607 1.607 0 0 1-1.606-1.606v-4.087M6.078 5.922h3.16"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.548 13.25H7.41v4.992h1.82M20.192 12.877a3.07 3.07 0 1 1-6.053 0l.389-4.943h5.274l.195 2.471M17.165 16.453v4.544m-1.542 0h3.085"
    />
  </Svg>
);
export default IconlystDrink1Broken;
