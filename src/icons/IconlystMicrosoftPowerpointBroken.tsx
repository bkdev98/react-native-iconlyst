import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftPowerpointBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.923 7.067a8.236 8.236 0 0 1 14.826 4.939v.08a8.16 8.16 0 0 1-1.467 4.606M6.742 16.691a8.22 8.22 0 0 0 6.769 3.54 8.2 8.2 0 0 0 4.324-1.224M19.247 12.086h-5.872M13.375 3.768V5.58"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 14c0 1.575.98 2.688 2.557 2.688h4.509c1.577 0 2.557-1.113 2.557-2.687V9.75c0-1.573-.98-2.687-2.556-2.687h-4.51c-1.571 0-2.557 1.114-2.557 2.688v1.7"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.354 12.502h1.522a1.342 1.342 0 1 0 0-2.686H7.354zm0 0v1.683"
    />
  </Svg>
);
export default IconlystMicrosoftPowerpointBroken;
