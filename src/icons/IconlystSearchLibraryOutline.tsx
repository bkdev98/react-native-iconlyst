import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLibraryOutline = ({
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
      d="M2.5 19.148a.75.75 0 0 1 .75-.75h7.118a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M2.5 14.383a.75.75 0 0 1 .75-.75h4.432a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M2.5 4.852a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M2.5 9.617a.75.75 0 0 1 .75-.75h7.011a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M16.54 11.162a3.081 3.081 0 1 0 0 6.163 3.081 3.081 0 0 0 0-6.163m-4.581 3.081a4.582 4.582 0 1 1 8.223 2.78l1.597 1.593a.75.75 0 0 1-1.06 1.062l-1.63-1.627a4.581 4.581 0 0 1-7.13-3.807"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchLibraryOutline;
