import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiggLight = ({
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
      d="M11.55 17.79h2.6a1 1 0 0 0 1-1v-1.7m0 0v-5.3a1 1 0 0 0-1-1h-1.6a1 1 0 0 0-1 1v4.3a1 1 0 0 0 1 1zM6.6 8.785v5.3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.3a1 1 0 0 1 1-1zm0 0V6.211M9.3 9.043v5.796M9.3 6.383v.097M17.4 17.79H20a1 1 0 0 0 1-1v-1.7m0 0v-5.3a1 1 0 0 0-1-1h-1.6a1 1 0 0 0-1 1v4.3a1 1 0 0 0 1 1z"
    />
  </Svg>
);
export default IconlystDiggLight;
