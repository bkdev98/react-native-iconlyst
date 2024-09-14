import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBotLight = ({
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
      d="M9.123 7.512h5.755c2.012 0 3.263 1.42 3.263 3.43v3.967c0 2.01-1.251 3.43-3.264 3.43H9.123c-2.011 0-3.264-1.42-3.264-3.43v-3.968c0-2.01 1.258-3.43 3.264-3.43"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.647 14.523q1.352.592 2.705 0M14.207 11.01V11M9.793 11.01V11M5.86 11h-.236a1.835 1.835 0 1 0 0 3.671h.236M18.14 11h.237a1.835 1.835 0 1 1 0 3.671h-.236"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.235 4.235a1.234 1.234 0 1 0-2.469 0 1.234 1.234 0 0 0 2.469 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 7.51V5.469M8.658 21h6.686"
    />
  </Svg>
);
export default IconlystBotLight;
