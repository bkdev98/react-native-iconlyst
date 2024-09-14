import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePlayCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.576 6.57 6.64 3.72a1.986 1.986 0 0 1-.01 3.466l-6.635 3.676-.002.001A1.985 1.985 0 0 1 7.621 15.7V8.301a1.984 1.984 0 0 1 2.955-1.731M9.183 8.064a.5.5 0 0 0-.062.237V15.7a.485.485 0 0 0 .716.425l.004-.002 6.636-3.677a.486.486 0 0 0 .188-.66M9.183 8.065a.485.485 0 0 1 .66-.186l6.634 3.718q.122.071.188.19"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.207 9.188a.75.75 0 0 1 .066 1.058l-6.002 6.8a.75.75 0 0 1-1.124-.992l6.002-6.8a.75.75 0 0 1 1.058-.066"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.228 6.873a.75.75 0 0 1 1.058.07l5.99 6.846a.75.75 0 1 1-1.13.987L8.157 7.931a.75.75 0 0 1 .07-1.058"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGooglePlayCircleOutline;
