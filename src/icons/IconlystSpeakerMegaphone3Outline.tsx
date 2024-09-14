import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone3Outline = ({
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
      d="M8.338 16.596a4.68 4.68 0 0 1-4.127-3.08 4.6 4.6 0 0 1 1.416-5.189c.965-.652 8.554-5.326 8.877-5.524a.75.75 0 1 1 .786 1.277c-.079.05-7.884 4.855-8.823 5.49a3.174 3.174 0 0 0 2.01 5.52c1.125-.119 10.24-1.459 10.331-1.473a.75.75 0 0 1 .22 1.484c-.378.056-9.239 1.36-10.4 1.48a3 3 0 0 1-.29.015"
    />
    <Path
      fill={props.color}
      d="M12.252 21.998a2.87 2.87 0 0 1-2.686-1.883L8.09 16.059a.75.75 0 0 1 1.408-.512l1.477 4.056a1.36 1.36 0 1 0 2.557-.93l-1.15-3.16a.75.75 0 1 1 1.41-.513l1.15 3.16a2.864 2.864 0 0 1-2.69 3.84zM18.721 15.12c-1.68 0-3.622-2.05-4.753-5.155-1.285-3.531-.89-6.69.916-7.35.954-.345 2.061.065 3.123 1.156a12.22 12.22 0 0 1 3.036 8.339c-.11 1.519-.7 2.546-1.65 2.893a2 2 0 0 1-.672.117m-3.15-11.123q-.09 0-.174.029c-.717.26-1.082 2.5-.02 5.425s2.783 4.412 3.5 4.142c.35-.127.6-.737.667-1.592a10.75 10.75 0 0 0-2.615-7.185 2.3 2.3 0 0 0-1.358-.82"
    />
  </Svg>
);
export default IconlystSpeakerMegaphone3Outline;
