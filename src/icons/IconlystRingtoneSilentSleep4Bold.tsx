import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSilentSleep4Bold = ({
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
      d="M14.349 17.775a2.35 2.35 0 0 1-2.35 2.35 2.35 2.35 0 0 1-2.35-2.35l-.002-.015h4.705zm-3.89-9.611h3.08a.749.749 0 0 1 .556 1.254l-1.944 2.144h1.388a.75.75 0 0 1 0 1.5h-3.08a.75.75 0 0 1-.556-1.254l1.944-2.144h-1.388a.75.75 0 0 1 0-1.5m9.53 5.629-.465-.99a4.8 4.8 0 0 1-.457-2.044l-.001-1.318A7.074 7.074 0 0 0 12 2.375a7.074 7.074 0 0 0-7.066 7.066l-.001 1.319c0 .7-.158 1.407-.457 2.042l-.465.991a2.77 2.77 0 0 0 .167 2.674 2.77 2.77 0 0 0 2.35 1.293h1.625l-.003.015a3.854 3.854 0 0 0 3.849 3.85 3.854 3.854 0 0 0 3.85-3.85l-.003-.015h1.626a2.77 2.77 0 0 0 2.35-1.292 2.77 2.77 0 0 0 .168-2.675"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtoneSilentSleep4Bold;
