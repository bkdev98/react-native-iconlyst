import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPage3Bold = ({
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
      d="M8.602 2.5c-1.594 0-2.927.568-3.86 1.568-.929.996-1.423 2.382-1.423 3.958v.716h18.999v-.716c0-1.576-.492-2.961-1.42-3.958-.931-1-2.264-1.568-3.862-1.568zM7.108 5.8a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.485 0a.75.75 0 0 0 0 1.5h.056a.75.75 0 1 0 0-1.5zm2.487 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 1 0 0-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M9.173 13.847a1.844 1.844 0 0 0 1.413 3.41l-1.193-1.194a.75.75 0 0 1-.22-.53zM10.673 13.846v1.376l.973.973a1.845 1.845 0 0 0-.973-2.349"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.319 15.973v-5.73h18.999v5.73c0 1.576-.492 2.961-1.42 3.958-.931 1-2.265 1.568-3.863 1.568H8.602c-1.598 0-2.931-.567-3.863-1.568-.928-.997-1.42-2.382-1.42-3.958m4.24-2.806a3.345 3.345 0 1 1 4.73 4.731 3.345 3.345 0 1 1-4.73-4.73m6.802.92a.75.75 0 0 1 .75-.75h3.197a.75.75 0 0 1 0 1.5h-3.197a.75.75 0 0 1-.75-.75m0 2.83a.75.75 0 0 1 .75-.75h2.456a.75.75 0 0 1 0 1.5h-2.456a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPage3Bold;
