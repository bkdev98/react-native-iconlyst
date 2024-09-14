import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePodcastOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m0 5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m0 11a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75M3 13.75a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 0-1.5 0v2c0 .414.336.75.75.75M21 13.75a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 0-1.5 0v2c0 .414.336.75.75.75M7.5 4.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m0 6a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75M16.5 4.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m0 12a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGooglePodcastOutline;
