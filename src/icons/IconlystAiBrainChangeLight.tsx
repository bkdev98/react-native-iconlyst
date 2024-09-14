import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainChangeLight = ({
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
      strokeWidth={1.5}
      d="M15.187 19.315c-.99.52-1.297 2.186-1.297 2.186M13.143 17.195c.238.862.198 1.685 1.109 1.886l2.784.628c.652.137 1.235-.189 1.338-.875l.31-2.643a.83.83 0 0 1 .517-.619l.928-.357a.75.75 0 0 0 .334-1.175c-.712-.957-1.718-2.522-1.414-3.9.57-2.583-.53-4.526-2.414-6.114-1.17-.987-2.542-1.395-4.002-1.499"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.257 7.602H3.375v1.75M9.151 3v1.882H7.27"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.44 4.73a3.04 3.04 0 0 1 2.654-1.533c2.042 0 3.058 1.694 3.058 1.694M8.739 7.779a3.05 3.05 0 0 1-2.645 1.523c-1.684 0-2.719-1.693-2.719-1.693"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4.309 12.863c1.455 2.605 2.127 5.568.884 8.402"
    />
  </Svg>
);
export default IconlystAiBrainChangeLight;
