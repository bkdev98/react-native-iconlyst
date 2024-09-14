import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoadmapOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.088 12.905a.838.838 0 1 0 0-1.676.838.838 0 0 0 0 1.676m2.339-.838a2.338 2.338 0 1 1-4.677 0 2.338 2.338 0 0 1 4.677 0M12.5 12.905a.838.838 0 1 0 0-1.676.838.838 0 0 0 0 1.676m2.338-.838a2.338 2.338 0 1 1-4.676 0 2.338 2.338 0 0 1 4.676 0M19.912 12.905a.838.838 0 1 0 0-1.676.838.838 0 0 0 0 1.676m2.338-.838a2.338 2.338 0 1 1-4.677 0 2.338 2.338 0 0 1 4.677 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.338 12.067a.75.75 0 0 1 .75-.75h4.235a.75.75 0 0 1 0 1.5h-4.235a.75.75 0 0 1-.75-.75M5.927 12.067a.75.75 0 0 1 .75-.75h4.235a.75.75 0 0 1 0 1.5H6.677a.75.75 0 0 1-.75-.75M12.206 18.877c0-.966.783-1.75 1.75-1.75h4.5c.966 0 1.75.784 1.75 1.75v1.2a1.75 1.75 0 0 1-1.75 1.75h-4.5a1.75 1.75 0 0 1-1.75-1.75zm1.75-.25a.25.25 0 0 0-.25.25v1.2c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-1.2a.25.25 0 0 0-.25-.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.206 14.405a.75.75 0 0 1-.75-.75v-1.588a.75.75 0 0 1 1.5 0v1.588a.75.75 0 0 1-.75.75M16.206 18.627a.75.75 0 0 1-.75-.75v-2a.75.75 0 1 1 1.5 0v2a.75.75 0 0 1-.75.75M8.794 12.817a.75.75 0 0 1-.75-.75V10.48a.75.75 0 0 1 1.5 0v1.588a.75.75 0 0 1-.75.75M4.794 4.161c0-.966.784-1.75 1.75-1.75h4.5c.967 0 1.75.784 1.75 1.75v1.2a1.75 1.75 0 0 1-1.75 1.75h-4.5a1.75 1.75 0 0 1-1.75-1.75zm1.75-.25a.25.25 0 0 0-.25.25v1.2c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-1.2a.25.25 0 0 0-.25-.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.794 5.611a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRoadmapOutline;
