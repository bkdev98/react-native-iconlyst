import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAssistantSpeakerLight = ({
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
      d="M17.977 4.246v.028c.01.038.01.076.01.104l.764 11.093C18.959 18.457 16.597 21 13.602 21h-3.194a5.173 5.173 0 0 1-5.159-5.547l.69-9.516"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.47 12.428c4.444 1.798 8.803 1.876 13.064 0M12.252 7.127c3.32-.485 5.884-1.76 5.725-2.847-.159-1.088-2.98-1.578-6.3-1.093s-5.883 1.76-5.725 2.847c.159 1.089 2.98 1.577 6.3 1.093"
    />
  </Svg>
);
export default IconlystGoogleAssistantSpeakerLight;
