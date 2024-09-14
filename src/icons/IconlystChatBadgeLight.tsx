import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatBadgeLight = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.586 4.008H7.17a3.87 3.87 0 0 0-3.87 3.87v6.794a3.87 3.87 0 0 0 3.87 3.87h1.05c.562 0 1.101.223 1.498.621l1.397 1.398a1.454 1.454 0 0 0 2.054 0l1.396-1.398a2.12 2.12 0 0 1 1.5-.621h1.05a3.87 3.87 0 0 0 3.87-3.87v-3.264"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.08 3.535a2.221 2.221 0 1 1 0 4.442 2.221 2.221 0 0 1 0-4.442"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.066 11.531v.07m.282-.055a.285.285 0 1 1-.569 0 .285.285 0 0 1 .57 0M9.364 11.531v.07m.283-.055a.285.285 0 1 1-.57 0 .285.285 0 0 1 .57 0"
    />
  </Svg>
);
export default IconlystChatBadgeLight;
