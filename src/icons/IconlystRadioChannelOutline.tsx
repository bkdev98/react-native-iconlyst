import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadioChannelOutline = ({
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
      d="M3.672 5.758c.782-.84 1.892-1.303 3.19-1.303H17.64c1.298 0 2.408.463 3.19 1.303C21.603 6.59 22 7.734 22 9v6.002c0 1.267-.398 2.41-1.174 3.242-.782.839-1.891 1.303-3.187 1.303H6.862c-1.299 0-2.409-.464-3.19-1.303-.776-.833-1.172-1.976-1.172-3.242V9c0-1.266.396-2.41 1.172-3.242M4.77 6.78C4.296 7.288 4 8.043 4 9v6.002c0 .956.296 1.711.77 2.22.468.502 1.164.825 2.092.825h10.777c.924 0 1.62-.322 2.09-.826.474-.509.771-1.264.771-2.22v-6c0-.958-.296-1.713-.77-2.221-.467-.503-1.163-.825-2.09-.825H6.862c-.929 0-1.625.322-2.093.825"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.889 12.93a3.127 3.127 0 1 1 6.254 0 3.127 3.127 0 0 1-6.254 0m3.127-1.627a1.627 1.627 0 1 0 0 3.254 1.627 1.627 0 0 0 0-3.254M14.145 12.93a2.234 2.234 0 1 1 4.467-.001 2.234 2.234 0 0 1-4.467 0m2.234-.735a.734.734 0 1 0-.001 1.468.734.734 0 0 0 0-1.468"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.605 10.487a.75.75 0 0 1 .836-.653l7.155.873a.75.75 0 0 1-.181 1.489l-7.156-.873a.75.75 0 0 1-.654-.836M17.25 14.316a.75.75 0 0 1-.654.835l-7.155.873a.75.75 0 1 1-.182-1.49l7.156-.872a.75.75 0 0 1 .835.653M8.393 4.498a.75.75 0 0 1 .96.45l.742 2.047a.64.64 0 0 0 .608.425h3.095c.278 0 .517-.17.608-.425l.001-.003.741-2.044a.75.75 0 0 1 1.41.51l-.74 2.043a2.14 2.14 0 0 1-2.02 1.419h-3.095a2.14 2.14 0 0 1-2.02-1.42l-.74-2.041a.75.75 0 0 1 .45-.96"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRadioChannelOutline;
