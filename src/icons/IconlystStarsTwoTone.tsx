import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarsTwoTone = ({
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
      d="M15.59 7.963a8.13 8.13 0 0 0 5.411 5.411 8.13 8.13 0 0 0-5.41 5.411 8.13 8.13 0 0 0-5.411-5.41 8.13 8.13 0 0 0 5.41-5.412"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.45 13.743a6.72 6.72 0 0 0-4.475 4.474 6.72 6.72 0 0 0-4.474-4.474 6.72 6.72 0 0 0 4.474-4.475 6.72 6.72 0 0 0 2.96 3.8M10.568 3.667a3.62 3.62 0 0 0 2.406 2.406 3.62 3.62 0 0 0-2.406 2.406 3.62 3.62 0 0 0-2.406-2.406 3.62 3.62 0 0 0 2.406-2.406"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStarsTwoTone;
