import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotionLight = ({
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
      d="M8.285 20.572H19.11a1.89 1.89 0 0 0 1.89-1.89V8.505a1.89 1.89 0 0 0-1.89-1.89H8.285a1.89 1.89 0 0 0-1.89 1.89v10.179a1.89 1.89 0 0 0 1.89 1.89M6.903 7.216 3.756 4.18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 17.994V7.862c0-.698-.283-1.367-.785-1.852L18.59 4.439a3.6 3.6 0 0 0-2.502-1.013H5.58A2.58 2.58 0 0 0 3 6.006v9.699c0 .973.395 1.906 1.096 2.584l1.61 1.558c.48.465 1.124.725 1.793.725h10.922"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.977 16.377.068-5.908 4.958 5.965.068-5.907"
    />
  </Svg>
);
export default IconlystNotionLight;
