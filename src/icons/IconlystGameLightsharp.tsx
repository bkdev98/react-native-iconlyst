import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameLightsharp = ({
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
      d="M8.893 12.767v3.647M10.753 14.59H7.03M15.24 12.878h-.104M17.006 16.36h-.104M7.829 3.535c0 .72.596 1.306 1.332 1.306h1.03c1.134.004 2.054.905 2.06 2.018v.707"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.012 21.535a6.916 6.916 0 0 0 6.916-6.916v0a6.916 6.916 0 0 0-6.916-6.916H8.488a6.916 6.916 0 0 0-6.916 6.916v0a6.916 6.916 0 0 0 6.916 6.916z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGameLightsharp;
