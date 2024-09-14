import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentInfinityBulk = ({
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
      d="M15.376 16.064c.08.07.2.07.281 0a3.87 3.87 0 0 1 3.277-.843.21.21 0 0 0 .254-.202V6.901a4.556 4.556 0 0 0-4.552-4.551h-6.9A4.555 4.555 0 0 0 3.185 6.9V16.5a4.555 4.555 0 0 0 4.55 4.55h1.461c.156 0 .254-.172.185-.312a3.88 3.88 0 0 1 .723-4.466 3.894 3.894 0 0 1 5.272-.207"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.138 13.799H7.49a.75.75 0 1 1 0-1.5h1.647a.75.75 0 0 1 0 1.5M7.49 7.936h4.038a.75.75 0 0 1 0 1.5H7.49a.75.75 0 1 1 0-1.5M18.985 19.821a1.14 1.14 0 0 1-1.605 0l-.803-.803.803-.802a1.135 1.135 0 0 1 1.605 1.605m-5.33 0a1.14 1.14 0 0 1-1.606.001 1.14 1.14 0 0 1 0-1.605 1.13 1.13 0 0 1 1.605-.001l.803.802zm6.391-2.666a2.64 2.64 0 0 0-3.727 0l-.803.803-.802-.803a2.64 2.64 0 0 0-3.726 0 2.643 2.643 0 0 0 .001 3.728 2.64 2.64 0 0 0 3.725-.001l.802-.803.803.803c.514.513 1.187.77 1.862.77s1.351-.257 1.866-.771a2.643 2.643 0 0 0 0-3.726"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentInfinityBulk;
