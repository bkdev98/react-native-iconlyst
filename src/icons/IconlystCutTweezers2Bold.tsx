import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCutTweezers2Bold = ({
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
      d="M10.45 8.649a.94.94 0 0 0-1.88 0 .94.94 0 0 0 1.88 0M9.51 14.41a.94.94 0 1 0 .003 1.88.94.94 0 0 0-.004-1.88"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.356 15.66a.75.75 0 0 1-1.02 1.1l-4.027-3.737-1.537 1.425c.112.279.178.582.178.901a2.444 2.444 0 0 1-2.441 2.441 2.443 2.443 0 0 1-2.439-2.441 2.443 2.443 0 0 1 2.439-2.44c.48 0 .925.144 1.303.384L12.206 12l-1.395-1.294c-.377.24-.822.384-1.302.384A2.443 2.443 0 0 1 7.07 8.649 2.443 2.443 0 0 1 9.509 6.21a2.443 2.443 0 0 1 2.441 2.439c0 .32-.066.623-.178.903l1.537 1.425 4.027-3.737a.75.75 0 0 1 1.02 1.1L14.411 12zM17.05 2.5H8.616c-3.159 0-5.282 2.222-5.282 5.53v7.94c0 3.307 2.123 5.53 5.282 5.53h8.433c3.161 0 5.285-2.223 5.285-5.53V8.03c0-3.308-2.124-5.53-5.284-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCutTweezers2Bold;
