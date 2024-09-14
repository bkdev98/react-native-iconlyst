import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnspashOutline = ({
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
      d="M3.25 11.998c0-.905.734-1.639 1.639-1.639H8c.905 0 1.639.734 1.639 1.64v2.61c0 .077.062.14.139.14h4.444a.14.14 0 0 0 .14-.14V12c0-.906.733-1.64 1.638-1.64h3.111c.905 0 1.639.734 1.639 1.64v7.11c0 .906-.734 1.64-1.639 1.64H4.89a1.64 1.64 0 0 1-1.639-1.64zm1.639-.139a.14.14 0 0 0-.139.14v7.11c0 .077.062.14.139.14H19.11a.14.14 0 0 0 .139-.14V12a.14.14 0 0 0-.139-.14H16a.14.14 0 0 0-.139.14v2.61c0 .906-.734 1.64-1.639 1.64H9.778a1.64 1.64 0 0 1-1.64-1.64V12a.14.14 0 0 0-.138-.14zM8.139 5c0-.966.783-1.75 1.75-1.75h4.222c.966 0 1.75.784 1.75 1.75v2.444a1.75 1.75 0 0 1-1.75 1.75H9.889a1.75 1.75 0 0 1-1.75-1.75zm1.75-.25a.25.25 0 0 0-.25.25v2.444c0 .139.112.25.25.25h4.222a.25.25 0 0 0 .25-.25V5a.25.25 0 0 0-.25-.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUnspashOutline;
