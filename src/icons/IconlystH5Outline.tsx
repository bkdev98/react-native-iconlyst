import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystH5Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.515 9.969a.75.75 0 0 1 .75-.75H21.5a.75.75 0 0 1 0 1.5h-3.485v2.735h1.367a2.868 2.868 0 0 1 0 5.735h-2.117a.75.75 0 0 1 0-1.5h2.117a1.368 1.368 0 0 0 0-2.735h-2.117a.75.75 0 0 1-.75-.75zM3.5 4.984a.75.75 0 0 1 .75.75v5.603h6.97V5.734a.75.75 0 1 1 1.5 0V18.44a.75.75 0 0 1-1.5 0v-5.603H4.25v5.603a.75.75 0 0 1-1.5 0V5.734a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystH5Outline;
