import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar6Outlinesharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m12.25.589 3.082 8.329L23.662 12l-8.33 3.082-3.082 8.33-3.082-8.33L.838 12l8.33-3.082zm0 4.322-1.915 5.174L5.161 12l5.174 1.915 1.915 5.174 1.915-5.174L19.339 12l-5.174-1.915z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStar6Outlinesharp;
