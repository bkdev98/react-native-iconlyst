import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFriendsFeedTwoTone = ({
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
      d="M11.577 10.308H8.93V7.767c0-.23.088-.44.248-.602a.87.87 0 0 1 .599-.245h2.07c.26 0 .47-.211.47-.471V4.002a.47.47 0 0 0-.47-.47h-2.07c-1.124 0-2.2.448-2.995 1.236a4.24 4.24 0 0 0-1.24 2.999v2.54H3.47a.47.47 0 0 0-.471.471v2.448c0 .26.21.47.47.47h2.071v6.306c0 .26.21.471.47.471H8.46c.26 0 .47-.21.47-.47v-6.307h2.647"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.576 10.308h2.647V7.767c0-1.127.446-2.203 1.24-3a4.26 4.26 0 0 1 2.996-1.236h2.07c.26 0 .47.21.47.47V6.45c0 .26-.21.47-.47.47h-2.07a.87.87 0 0 0-.6.246.85.85 0 0 0-.248.602v2.54h2.918c.26 0 .47.212.47.471v2.448c0 .26-.21.47-.47.47h-2.918v6.306c0 .26-.21.471-.47.471h-2.447a.47.47 0 0 1-.471-.47v-6.307h-2.647"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFriendsFeedTwoTone;
