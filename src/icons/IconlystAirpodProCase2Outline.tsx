import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodProCase2Outline = ({
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
      d="M8.373 4.528A4.373 4.373 0 0 0 4 8.9v.06h16.498V8.9a4.37 4.37 0 0 0-4.372-4.372zm13.625 5.127V8.9a5.87 5.87 0 0 0-5.872-5.872H8.373A5.873 5.873 0 0 0 2.5 8.9v6.2a5.874 5.874 0 0 0 5.873 5.872h7.753a5.873 5.873 0 0 0 5.872-5.873V9.763a1 1 0 0 0 0-.108m-1.5.804H4v4.64a4.374 4.374 0 0 0 4.373 4.373h7.753a4.373 4.373 0 0 0 4.372-4.373zM11.5 13.89a.75.75 0 0 1 .75-.75h.04a.75.75 0 0 1 0 1.5h-.04a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirpodProCase2Outline;
