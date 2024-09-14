import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWifiPhoneBulk = ({
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
      d="M13.517 20.65a.36.36 0 0 0-.25-.296 2.5 2.5 0 0 1-1.122-.71 2.46 2.46 0 0 1-.628-1.423.35.35 0 0 0-.237-.3 2.47 2.47 0 0 1-1.154-.818 2.5 2.5 0 0 1 .429-3.509c1.749-1.37 3.93-1.98 6.07-1.844a.31.31 0 0 0 .33-.304V6.599a4.104 4.104 0 0 0-4.1-4.099h-5.5a4.104 4.104 0 0 0-4.1 4.099v10.8a4.105 4.105 0 0 0 4.1 4.101h5.5q.254 0 .498-.033c.192-.025.294-.234.241-.42a2.6 2.6 0 0 1-.077-.397"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.955 6.7a.75.75 0 0 1 .75-.75h2.8a.75.75 0 0 1 0 1.5h-2.8a.75.75 0 0 1-.75-.75M20.457 14.972c-2.557-2-6.268-2-8.825 0a.75.75 0 0 0 .925 1.182c2.021-1.581 4.955-1.582 6.975 0a.75.75 0 0 0 .925-1.182"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.49 17.408a.75.75 0 1 0 1.01 1.109c.81-.737 2.18-.736 2.99 0a.746.746 0 0 0 1.06-.05.75.75 0 0 0-.05-1.06c-1.382-1.254-3.629-1.256-5.01 0M15.465 19.833a.749.749 0 1 0 1.06 1.06.75.75 0 0 0 0-1.06.774.774 0 0 0-1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWifiPhoneBulk;
