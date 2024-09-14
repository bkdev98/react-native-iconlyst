import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarStarBroken = ({
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
      d="M8.46 13.282zM12.137 13.282zM8.46 16.673z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.028 13.86.797 1.596c.08.157.232.266.405.29l1.787.257a.53.53 0 0 1 .298.906l-1.292 1.24a.53.53 0 0 0-.155.47l.306 1.753a.537.537 0 0 1-.781.56l-1.595-.828a.55.55 0 0 0-.502 0l-1.596.827a.537.537 0 0 1-.781-.559l.305-1.752a.52.52 0 0 0-.154-.47l-1.293-1.241a.53.53 0 0 1 .298-.905l1.786-.257a.54.54 0 0 0 .405-.29l.8-1.596a.543.543 0 0 1 .962 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.404 9.664h13.309M16.139 3v2.962M8.866 3v2.962M20.604 11.622V8.597c.008-2.707-1.635-4.179-4.286-4.179h-.175m-5.227 16.578H8.698c-2.644 0-4.294-1.506-4.294-4.255V8.597c0-1.658.62-2.853 1.707-3.53M13.038 4.418H8.941"
    />
  </Svg>
);
export default IconlystCalendarStarBroken;
