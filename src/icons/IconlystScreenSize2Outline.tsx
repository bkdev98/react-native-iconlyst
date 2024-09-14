import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreenSize2Outline = ({
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
      d="M21.084 14.664a.75.75 0 0 1 .75.75v2.511a3.825 3.825 0 0 1-3.826 3.825h-2.51a.75.75 0 0 1 0-1.5h2.51a2.325 2.325 0 0 0 2.326-2.325v-2.51a.75.75 0 0 1 .75-.75M3.084 14.664a.75.75 0 0 1 .75.75v2.511A2.325 2.325 0 0 0 6.16 20.25h2.51a.75.75 0 0 1 0 1.5H6.16a3.825 3.825 0 0 1-3.826-3.825v-2.51a.75.75 0 0 1 .75-.75M6.16 3.75a2.325 2.325 0 0 0-2.326 2.326v2.51a.75.75 0 1 1-1.5 0v-2.51A3.825 3.825 0 0 1 6.16 2.25h2.51a.75.75 0 0 1 0 1.5zM14.748 3a.75.75 0 0 1 .75-.75h2.51a3.825 3.825 0 0 1 3.826 3.826v2.51a.75.75 0 0 1-1.5 0v-2.51a2.325 2.325 0 0 0-2.326-2.326h-2.51a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScreenSize2Outline;
