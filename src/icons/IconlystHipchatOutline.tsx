import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHipchatOutline = ({
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
      d="M2.25 11.389c0-4.8 4.476-8.514 9.752-8.514 5.275 0 9.748 3.714 9.748 8.514 0 2.467-1.194 4.664-3.065 6.204.07.21.14.413.223.622.142.36.29.647.462.857l.014.018c.285.372.422.893.169 1.375-.245.468-.734.66-1.178.66-1.714 0-3.2-.61-4.486-1.412a38 38 0 0 1-1.889.072c-5.26 0-9.75-3.58-9.75-8.396m15.116 5.328.002-.001.008-.006.035-.026.134-.1c1.686-1.305 2.705-3.161 2.705-5.195 0-3.772-3.587-7.014-8.248-7.014-4.664 0-8.252 3.242-8.252 7.014 0 3.76 3.57 6.896 8.25 6.896.4 0 1.078-.027 2.045-.083a.75.75 0 0 1 .452.12c1.062.69 2.186 1.185 3.42 1.284a5.7 5.7 0 0 1-.404-.84c-.11-.276-.211-.578-.302-.847q-.062-.186-.116-.343a.75.75 0 0 1 .271-.86"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.968 12.97a.75.75 0 0 1 1.06 0 4.18 4.18 0 0 0 5.943 0 .75.75 0 0 1 1.06 1.06 5.68 5.68 0 0 1-8.063 0 .75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHipchatOutline;
