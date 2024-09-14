import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotionTwoTone = ({
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
      d="M8.285 20.572H19.11a1.89 1.89 0 0 0 1.89-1.89V8.505a1.89 1.89 0 0 0-1.89-1.89H8.285a1.89 1.89 0 0 0-1.89 1.89v10.179a1.89 1.89 0 0 0 1.89 1.89"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M6.903 7.216 3.756 4.18M21 17.994V7.862c0-.698-.283-1.367-.785-1.852L18.59 4.439a3.6 3.6 0 0 0-2.502-1.013H5.58A2.58 2.58 0 0 0 3 6.006v9.699c0 .973.395 1.906 1.096 2.584l1.61 1.558c.48.465 1.124.725 1.793.725h10.922" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.312 10.543v6.379M16.084 10.266v6.236a.172.172 0 0 1-.316.093l-3.928-6.081M11.84 10.512l-1.144.066M15.468 10.299l1.231-.072M10.696 16.958l1.135-.075"
    />
  </Svg>
);
export default IconlystNotionTwoTone;
