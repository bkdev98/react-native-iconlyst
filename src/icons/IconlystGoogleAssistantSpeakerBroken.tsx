import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAssistantSpeakerBroken = ({
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
      d="M10.408 21a5.173 5.173 0 0 1-5.159-5.547l.69-9.515M17.977 4.246v.028c.01.038.01.076.01.104l.764 11.093C18.96 18.457 16.597 21 13.602 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.47 12.428c3.541 1.432 7.028 1.773 10.455.903M11.677 3.187c3.32-.484 6.142.005 6.3 1.093.159 1.087-2.404 2.362-5.725 2.847s-6.141-.004-6.3-1.093c-.103-.707.944-1.493 2.6-2.09"
    />
  </Svg>
);
export default IconlystGoogleAssistantSpeakerBroken;
