import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoice2Boldsharp = ({
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
      d="M11.96 10.177v1.5h4.48v.19c0 2.32-1.88 4.21-4.19 4.21-2.32 0-4.2-1.89-4.2-4.21v-5.17c0-2.33 1.88-4.22 4.2-4.22 2.27 0 4.12 1.82 4.18 4.09h-3.39v1.5h3.4v2.11z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.778 11.147v.75c0 3.619-2.93 6.563-6.53 6.563-3.598 0-6.526-2.944-6.526-6.563v-.75h-1.5v.75c0 4.191 3.2 7.643 7.276 8.025v2.809h1.5v-2.809c4.077-.381 7.28-3.833 7.28-8.025v-.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVoice2Boldsharp;
