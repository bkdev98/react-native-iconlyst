import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPagePasswordBold = ({
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
      d="M8.602 2.5c-1.594 0-2.927.568-3.86 1.568-.929.996-1.423 2.382-1.423 3.958v.716h18.999v-.716c0-1.576-.492-2.961-1.42-3.958-.931-1-2.264-1.568-3.862-1.568zM7.108 5.8a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.485 0a.75.75 0 0 0 0 1.5h.056a.75.75 0 1 0 0-1.5zm2.487 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 1 0 0-1.5zM3.319 15.973v-5.73h18.999v5.73c0 1.576-.492 2.961-1.42 3.958-.931 1-2.265 1.568-3.863 1.568H8.602c-1.598 0-2.931-.567-3.863-1.568-.928-.997-1.42-2.382-1.42-3.958m4.69-2.392a.75.75 0 1 0-1.06 1.06l.442.443-.443.443a.75.75 0 0 0 1.06 1.06l.443-.442.443.442a.75.75 0 1 0 1.06-1.06l-.442-.443.443-.442a.75.75 0 0 0-1.061-1.061l-.443.443zm4.367 0a.75.75 0 1 0-1.06 1.06l.442.443-.443.443a.75.75 0 0 0 1.061 1.06l.443-.442.442.442a.75.75 0 0 0 1.06-1.06l-.442-.443.443-.442a.75.75 0 0 0-1.06-1.061l-.443.443zm3.307 0a.75.75 0 0 1 1.06 0l.443.443.442-.443a.75.75 0 0 1 1.061 1.06l-.442.443.442.443a.75.75 0 0 1-1.06 1.06l-.443-.442-.443.442a.75.75 0 1 1-1.06-1.06l.442-.443-.442-.442a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPagePasswordBold;
