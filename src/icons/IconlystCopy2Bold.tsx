import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCopy2Bold = ({
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
      d="M15.565 6.686a.26.26 0 0 0 .26-.26c0-2.35-1.51-3.93-3.77-3.93h-5.77c-2.26 0-3.78 1.58-3.78 3.93v5.44c0 2.36 1.52 3.94 3.78 3.94h.09a.3.3 0 0 0 .3-.3v-3.38c0-3.15 2.22-5.44 5.27-5.44z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.722 8.186h-5.774c-2.257 0-3.773 1.584-3.773 3.94v5.439c0 2.356 1.516 3.94 3.773 3.94h5.773c2.256 0 3.773-1.584 3.773-3.94v-5.44c0-2.355-1.515-3.94-3.773-3.94"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCopy2Bold;
