import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJumpRopeOutline = ({
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
      d="M6.6 14.55c-.58 0-1.05.47-1.05 1.05v3.6a1.05 1.05 0 1 0 2.1 0v-3.6c0-.58-.47-1.05-1.05-1.05M4.05 15.6a2.55 2.55 0 0 1 5.1 0v3.6a2.55 2.55 0 0 1-5.1 0zM17.4 3.75c-.58 0-1.05.47-1.05 1.05v3.6a1.05 1.05 0 1 0 2.1 0V4.8c0-.58-.47-1.05-1.05-1.05M14.85 4.8a2.55 2.55 0 0 1 5.1 0v3.6a2.55 2.55 0 0 1-5.1 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.3 6.45A1.95 1.95 0 0 0 7.35 8.4v5.4a.75.75 0 0 1-1.5 0V8.4a3.45 3.45 0 1 1 6.9 0v7.2a1.95 1.95 0 0 0 3.9 0v-5.4a.75.75 0 0 1 1.5 0v5.4a3.45 3.45 0 0 1-6.9 0V8.4A1.95 1.95 0 0 0 9.3 6.45"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystJumpRopeOutline;
