import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongUploadBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.319 13.427c.652 0 1.268.137 1.836.37.173.07.373-.018.419-.2a9.4 9.4 0 0 0 .285-2.282c0-5.239-4.262-9.5-9.5-9.5s-9.5 4.261-9.5 9.5 4.262 9.5 9.5 9.5c.732 0 1.442-.09 2.126-.25.181-.043.273-.242.206-.415a4.9 4.9 0 0 1-.335-1.76 4.963 4.963 0 0 1 4.963-4.963"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m22.063 17.509-2.17-2.178a.774.774 0 0 0-1.062 0l-2.17 2.178a.75.75 0 1 0 1.063 1.059l.889-.892v3.759a.75.75 0 0 0 1.5 0v-3.76l.887.893c.146.147.338.22.532.22a.75.75 0 0 0 .531-1.279M15.625 8.922a.75.75 0 0 1-.948.476 3.3 3.3 0 0 1-1.054-.58l-.515 4.275-.003.01a2.84 2.84 0 0 1-1.069 1.893 2.83 2.83 0 0 1-2.102.588 2.83 2.83 0 0 1-1.903-1.07 2.855 2.855 0 0 1 2.585-4.594c.489.059.926.25 1.301.517l.457-3.79a.75.75 0 0 1 .697-.658.77.77 0 0 1 .774.565c.013.047.307 1.09 1.304 1.42a.75.75 0 0 1 .476.948m-5.35 2.477q.081 0 .162.01a1.353 1.353 0 1 1-.162-.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongUploadBulk;
