import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAssistantSpeakerBold = ({
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
      d="M12.173 14.546c-1.946 0-3.922-.342-5.918-1.035a.1.1 0 0 1-.066-.101l.095-1.351a.1.1 0 0 1 .135-.087c3.89 1.417 7.653 1.418 11.237.014a.1.1 0 0 1 .137.087l.095 1.358a.1.1 0 0 1-.065.1 16.4 16.4 0 0 1-5.65 1.015m-.35-10.62c.88-.13 1.66-.18 2.34-.18 1.91 0 2.99.41 3.1.62-.03.18-.46.56-1.3.96-.85.39-2.11.81-3.79 1.05-3.37.5-5.29-.15-5.45-.44.07-.35 1.73-1.52 5.1-2.01m7.71 11.49-.21-2.99-.55-8.05a1.5 1.5 0 0 0-.05-.35.5.5 0 0 0-.04-.11c-.08-.25-.26-.55-.61-.81-1.09-.82-3.63-1.08-6.47-.67-3.01.44-6.13 1.64-6.35 3.29 0 0-.01 0-.01.01-.01.03-.01.06-.01.1-.01.01-.01.03-.01.04v.05l-.47 6.5-.22 2.97c-.12 1.63.46 3.26 1.57 4.46 1.12 1.2 2.7 1.89 4.34 1.89h3.19c1.64 0 3.21-.69 4.32-1.88a5.95 5.95 0 0 0 1.58-4.45"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleAssistantSpeakerBold;