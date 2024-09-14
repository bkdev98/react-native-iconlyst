import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageBlockOutline = ({
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
      d="M4.098 3.885c.978-1.049 2.37-1.635 4.013-1.635h8.365c1.647 0 3.04.586 4.017 1.635.972 1.044 1.477 2.484 1.477 4.1v4.02a.75.75 0 0 1-1.5 0v-1.817H4.118v5.678c0 1.305.405 2.358 1.074 3.076.664.713 1.643 1.158 2.92 1.158h1.735a.75.75 0 1 1 0 1.5H8.111c-1.647 0-3.04-.586-4.017-1.636-.971-1.043-1.476-2.483-1.476-4.098V7.985c0-1.617.508-3.057 1.48-4.1m.02 4.803H20.47v-.703c0-1.307-.405-2.359-1.075-3.077-.663-.713-1.642-1.158-2.919-1.158H8.111c-1.271 0-2.25.445-2.916 1.158-.67.72-1.077 1.771-1.077 3.077zM5.88 6.52a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5H6.63a.75.75 0 0 1-.75-.75m2.465 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 1 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.464 0a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m1.936 10.871a4.36 4.36 0 1 1 8.719.001 4.36 4.36 0 0 1-8.719 0m2.914 2.467a2.858 2.858 0 0 0 3.94-3.863zm2.89-4.934-3.94 3.863a2.86 2.86 0 0 1 3.941-3.863"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageBlockOutline;
