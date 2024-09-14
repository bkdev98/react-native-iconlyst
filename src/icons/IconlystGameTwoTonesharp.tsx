import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameTwoTonesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M8.892 12.767v3.647m1.86-1.823H7.03M15.24 12.878h-.104M17.006 16.36h-.104M7.828 3.535c0 .72.597 1.306 1.333 1.306h1.029c1.135.004 2.055.905 2.06 2.018v.707"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.012 21.535a6.916 6.916 0 0 0 6.916-6.916v0a6.916 6.916 0 0 0-6.916-6.916H8.487a6.916 6.916 0 0 0-6.916 6.916v0a6.916 6.916 0 0 0 6.916 6.916z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGameTwoTonesharp;
