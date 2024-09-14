import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarLampBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.498 17.41-2.337 1.262A1.115 1.115 0 0 1 6.54 17.51l.636-3.644a1.09 1.09 0 0 0-.322-.976l-2.688-2.58a1.1 1.1 0 0 1 .619-1.881L6.64 8.16M16.828 13.866l.636 3.643a1.115 1.115 0 0 1-1.624 1.162l-2.863-1.43.901 4.009a.5.5 0 0 1-.486.615h-2.784a.5.5 0 0 1-.486-.615l.227-1.001M9.34 7.29l1.663-3.317a1.125 1.125 0 0 1 1.998 0l1.66 3.317c.164.327.48.552.841.603l3.714.534a1.1 1.1 0 0 1 .62 1.882l-1.344 1.29"
    />
  </Svg>
);
export default IconlystStarLampBroken;
