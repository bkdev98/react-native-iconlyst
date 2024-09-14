import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitlabOutline = ({
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
      d="M17.556 2.8a.75.75 0 0 1 .713.513l3.442 10.31a.75.75 0 0 1-.268.842l-9.005 6.588a.75.75 0 0 1-.886 0l-8.995-6.588a.75.75 0 0 1-.268-.843L5.73 3.313a.75.75 0 0 1 1.423.001L9.2 9.466h5.62l2.026-6.15a.75.75 0 0 1 .71-.515m.006 3.133-1.488 4.517a.75.75 0 0 1-.713.516H8.658a.75.75 0 0 1-.712-.514L6.441 5.924l-2.556 7.654 8.11 5.94 8.12-5.94z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitlabOutline;
