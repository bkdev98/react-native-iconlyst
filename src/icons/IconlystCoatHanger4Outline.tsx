import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger4Outline = ({
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
      d="M8.09 16.031a.53.53 0 0 0-.53.53v2.369c0 .293.236.53.53.53h7.814a.53.53 0 0 0 .53-.53V16.56a.53.53 0 0 0-.53-.53zm-2.03.53a2.03 2.03 0 0 1 2.03-2.03h7.814a2.03 2.03 0 0 1 2.03 2.03v2.369a2.03 2.03 0 0 1-2.03 2.03H8.09a2.03 2.03 0 0 1-2.03-2.03z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.43 4.593c-.992-.259-1.858.47-1.858 1.39a.75.75 0 0 1-1.5 0 2.954 2.954 0 0 1 3.74-2.84h.003a2.93 2.93 0 0 1 2.032 2.01m-2.418-.56c.455.122.846.509.973.963.224.799-.2 1.518-.854 1.771l-.005.002c-.74.293-1.275.995-1.275 1.84v.486a.75.75 0 0 0 .463.694l7.565 3.13h.002a1.542 1.542 0 0 1-.592 2.968h-1.521a.75.75 0 0 0 0 1.5h1.52a3.042 3.042 0 0 0 1.173-5.85l-7.11-2.943a.49.49 0 0 1 .325-.43 2.944 2.944 0 0 0 1.754-3.572M10.386 10.173a.75.75 0 0 1-.397.983l-5.306 2.252a1.53 1.53 0 0 0-.933 1.414v.09c0 .845.69 1.536 1.536 1.536h1.521a.75.75 0 0 1 0 1.5h-1.52A3.04 3.04 0 0 1 2.25 14.91v-.09a3.03 3.03 0 0 1 1.855-2.797l5.298-2.249a.75.75 0 0 1 .983.398"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoatHanger4Outline;
