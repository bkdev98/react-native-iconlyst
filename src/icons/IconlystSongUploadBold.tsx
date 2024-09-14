import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongUploadBold = ({
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
      d="M9.866 11.409a1.354 1.354 0 0 0-1.226 2.178c.223.284.543.465.902.508.36.044.714-.056.997-.28a1.353 1.353 0 0 0-.673-2.407"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.055 8.921a.75.75 0 0 1-.948.476 3.3 3.3 0 0 1-1.054-.58l-.515 4.275q-.002.005-.003.011a2.84 2.84 0 0 1-1.07 1.892 2.83 2.83 0 0 1-2.101.588 2.83 2.83 0 0 1-1.903-1.07 2.855 2.855 0 0 1 2.585-4.594c.489.06.926.25 1.3.517l.458-3.789a.75.75 0 0 1 .697-.659.77.77 0 0 1 .774.565c.01.04.303 1.09 1.304 1.42a.75.75 0 0 1 .476.948m3.694 4.506c.652 0 1.268.137 1.836.37.173.07.373-.018.419-.2a9.4 9.4 0 0 0 .285-2.282c0-5.239-4.262-9.5-9.5-9.5s-9.5 4.261-9.5 9.5 4.262 9.5 9.5 9.5c.732 0 1.442-.09 2.126-.25.182-.043.273-.242.206-.415a4.9 4.9 0 0 1-.335-1.76 4.963 4.963 0 0 1 4.963-4.963"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.492 17.509-2.169-2.178a.774.774 0 0 0-1.063 0l-2.169 2.178a.75.75 0 1 0 1.062 1.059l.89-.892v3.759a.75.75 0 0 0 1.5 0v-3.76l.887.893c.146.147.338.22.531.22a.75.75 0 0 0 .531-1.279"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongUploadBold;
