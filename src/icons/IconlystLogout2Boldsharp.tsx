import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogout2Boldsharp = ({
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
      d="M7.163 11.409h6.26v-9H1.903v19.5h11.52v-9h-6.26zM21.846 11.409c-2.012-.001-3.844-1.833-3.844-3.846v-.75h-1.5v.75c0 1.477.675 2.857 1.719 3.846h-4.798v1.5h4.798c-1.044.989-1.719 2.368-1.719 3.845v.75h1.5v-.75c0-2.012 1.833-3.845 3.845-3.845h.75v-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLogout2Boldsharp;
