import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarTagLight = ({
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
      d="m12.66 4.143 1.305-.638a1.244 1.244 0 0 1 1.644.534l.681 1.283c.18.34.506.576.884.643l1.43.25c.66.116 1.11.735 1.017 1.399l-.204 1.439c-.054.38.07.763.337 1.038l1.01 1.044a1.244 1.244 0 0 1 0 1.729l-1.01 1.044a1.24 1.24 0 0 0-.337 1.038l.203 1.438a1.244 1.244 0 0 1-1.016 1.399l-1.43.251a1.24 1.24 0 0 0-.884.641l-.68 1.284a1.243 1.243 0 0 1-1.645.534l-1.305-.638a1.24 1.24 0 0 0-1.092 0l-1.305.638a1.24 1.24 0 0 1-1.644-.534l-.68-1.284a1.24 1.24 0 0 0-.884-.641l-1.431-.251a1.244 1.244 0 0 1-1.016-1.4l.203-1.437a1.24 1.24 0 0 0-.337-1.038l-1.01-1.044a1.244 1.244 0 0 1 0-1.73l1.01-1.043c.266-.275.39-.659.337-1.038l-.203-1.44a1.244 1.244 0 0 1 1.016-1.397l1.43-.251c.378-.067.704-.304.884-.643L8.62 4.04a1.244 1.244 0 0 1 1.644-.534l1.305.638c.345.169.748.169 1.092 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.114 8.25a5.64 5.64 0 0 0 3.75 3.75 5.64 5.64 0 0 0-3.75 3.75A5.64 5.64 0 0 0 8.364 12a5.64 5.64 0 0 0 3.75-3.75"
    />
  </Svg>
);
export default IconlystStarTagLight;
