import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFriendsFeedLight = ({
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
      d="M9.777 3.531h2.07c.26 0 .47.21.47.47V6.45c0 .26-.21.47-.47.47h-2.07a.87.87 0 0 0-.6.246.85.85 0 0 0-.247.602v2.54h5.293v-2.54c0-1.127.446-2.203 1.241-3a4.26 4.26 0 0 1 2.995-1.236h2.07c.26 0 .471.21.471.47V6.45c0 .26-.21.47-.47.47h-2.071a.87.87 0 0 0-.6.246.85.85 0 0 0-.247.602v2.54h2.917c.26 0 .471.212.471.471v2.448c0 .26-.21.47-.47.47h-2.918v6.306c0 .26-.211.471-.47.471h-2.448a.47.47 0 0 1-.47-.47v-6.307H8.93v6.306c0 .26-.211.471-.471.471H6.012a.47.47 0 0 1-.47-.47v-6.307H3.47a.47.47 0 0 1-.471-.47v-2.448c0-.26.21-.47.47-.47h2.071V7.767c0-1.127.446-2.203 1.241-3a4.26 4.26 0 0 1 2.995-1.236"
    />
  </Svg>
);
export default IconlystFriendsFeedLight;
