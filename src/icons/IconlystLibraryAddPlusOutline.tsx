import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLibraryAddPlusOutline = ({
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
      d="M2.5 19.148a.75.75 0 0 1 .75-.75h3.644a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M2.5 14.383a.75.75 0 0 1 .75-.75h6.27a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M2.5 9.617a.75.75 0 0 1 .75-.75h9.143a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M2.5 4.852a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M17.179 12.242a.75.75 0 0 1 .75.75v2.328h2.328a.75.75 0 0 1 0 1.5h-2.329v2.328a.75.75 0 1 1-1.5 0V16.82h-2.326a.75.75 0 1 1 0-1.5h2.326v-2.328a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLibraryAddPlusOutline;
