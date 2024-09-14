import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlack2Outline = ({
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
      d="M6.15 12.75a1.5 1.5 0 1 0 1.5 1.5v-1.5zm0-1.5H8.4a.75.75 0 0 1 .75.75v2.25a3 3 0 1 1-3-3M11.25 6.148a1.5 1.5 0 1 0-1.5 1.5h1.5zm1.5 0v2.25a.75.75 0 0 1-.75.75H9.75a3 3 0 1 1 3-3M17.85 11.25a1.5 1.5 0 1 0-1.5-1.5v1.5zm0-4.5a3 3 0 0 0-3 3V12c0 .414.335.75.75.75h2.25a3 3 0 1 0 0-6M12.75 17.852a1.5 1.5 0 1 0 1.5-1.5h-1.5zm4.5 0a3 3 0 0 0-3-3H12a.75.75 0 0 0-.75.75v2.25a3 3 0 0 0 6 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.25 13.8a2.55 2.55 0 0 1 2.55-2.55h5.4a2.55 2.55 0 0 1 0 5.1h-5.4a2.55 2.55 0 0 1-2.55-2.55m2.55-1.05a1.05 1.05 0 1 0 0 2.1h5.4a1.05 1.05 0 1 0 0-2.1z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.2 12.75c-.58 0-1.05.47-1.05 1.05v5.4a1.05 1.05 0 0 0 2.1 0v-5.4c0-.58-.47-1.05-1.05-1.05M7.65 13.8a2.55 2.55 0 0 1 5.1 0v5.4a2.55 2.55 0 0 1-5.1 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.8 3.75c-.58 0-1.05.47-1.05 1.05v5.4a1.05 1.05 0 1 0 2.1 0V4.8c0-.58-.47-1.05-1.05-1.05M11.25 4.8a2.55 2.55 0 0 1 5.1 0v5.4a2.55 2.55 0 0 1-5.1 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.8 9.148a1.05 1.05 0 1 0 0 2.1h5.4a1.05 1.05 0 1 0 0-2.1zm-2.55 1.05a2.55 2.55 0 0 1 2.55-2.55h5.4a2.55 2.55 0 0 1 0 5.1H4.8a2.55 2.55 0 0 1-2.55-2.55"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlack2Outline;
