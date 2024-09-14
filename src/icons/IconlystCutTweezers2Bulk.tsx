import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCutTweezers2Bulk = ({
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
      d="M17.05 2.5H8.616c-3.159 0-5.282 2.222-5.282 5.53v7.94c0 3.307 2.123 5.53 5.282 5.53h8.433c3.161 0 5.285-2.223 5.285-5.53V8.03c0-3.308-2.124-5.53-5.284-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.396 16.72a.75.75 0 0 0-.04-1.06L14.411 12l3.945-3.66a.75.75 0 0 0-1.02-1.1l-4.027 3.738-1.537-1.425c.112-.28.178-.583.178-.903a2.443 2.443 0 0 0-2.44-2.44 2.443 2.443 0 0 0-2.44 2.44 2.443 2.443 0 0 0 2.44 2.44c.48 0 .924-.143 1.301-.383L12.206 12l-1.394 1.293a2.4 2.4 0 0 0-1.303-.384 2.443 2.443 0 0 0-2.439 2.44 2.443 2.443 0 0 0 2.44 2.44 2.444 2.444 0 0 0 2.44-2.44c0-.32-.066-.622-.178-.901l1.537-1.425 4.027 3.737a.75.75 0 0 0 1.06-.04M9.51 14.41a.94.94 0 1 0 .003 1.881.94.94 0 0 0-.003-1.88m0-6.7a.94.94 0 0 1 0 1.88.94.94 0 0 1 0-1.879"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCutTweezers2Bulk;
