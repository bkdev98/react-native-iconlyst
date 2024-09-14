import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarLoveBroken = ({
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
      d="M15.64 3v2.962M8.37 3v2.962"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.89 13.286c.34-1.062-.056-2.274-1.17-2.633a1.9 1.9 0 0 0-1.72.289 1.92 1.92 0 0 0-1.716-.289c-1.114.36-1.514 1.571-1.175 2.633C9.64 14.967 12 16.263 12 16.263s2.344-1.276 2.89-2.977"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.807 21.001c2.651 0 4.293-1.48 4.293-4.187V8.6c.008-2.707-1.634-4.18-4.286-4.18h-7.62c-2.643 0-4.294 1.473-4.294 4.18v8.145C3.9 19.494 5.55 21 8.194 21h4.052"
    />
  </Svg>
);
export default IconlystCalendarLoveBroken;
