import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailLockOutline = ({
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
      d="M7.815 20.89a5.04 5.04 0 0 1-3.64-1.48A5.96 5.96 0 0 1 2.5 15.133v-6.18A5.44 5.44 0 0 1 7.832 3.19h8.836A5.44 5.44 0 0 1 22 8.953v1.681a.75.75 0 1 1-1.5 0v-1.68c0-2.47-1.612-4.264-3.832-4.264H7.832C5.612 4.69 4 6.483 4 8.953v6.181a4.48 4.48 0 0 0 1.234 3.214 3.58 3.58 0 0 0 2.584 1.042h4.35a.75.75 0 1 1 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M19.85 21.388h-2.815a2.15 2.15 0 0 1-2.148-2.15v-1.58a2.15 2.15 0 0 1 2.148-2.147h2.816a2.15 2.15 0 0 1 2.148 2.148v1.58a2.15 2.15 0 0 1-2.148 2.149m-2.815-4.377a.65.65 0 0 0-.648.648v1.58a.65.65 0 0 0 .648.649h2.816a.65.65 0 0 0 .648-.65v-1.58a.65.65 0 0 0-.648-.647z"
    />
    <Path
      fill={props.color}
      d="M20.128 17.045a.75.75 0 0 1-.75-.75v-1.04a.931.931 0 1 0-1.862.006v1.034a.75.75 0 1 1-1.5 0v-1.048a2.424 2.424 0 0 1 2.4-2.4h.03a2.434 2.434 0 0 1 2.432 2.4v1.05a.75.75 0 0 1-.75.748M12.275 13.652a2.8 2.8 0 0 1-1.75-.613L6.485 9.783a.75.75 0 0 1 .942-1.168l4.033 3.252a1.31 1.31 0 0 0 1.637 0L17.09 8.62a.75.75 0 1 1 .946 1.164l-4 3.252c-.5.398-1.121.615-1.76.614"
    />
  </Svg>
);
export default IconlystEmailLockOutline;
