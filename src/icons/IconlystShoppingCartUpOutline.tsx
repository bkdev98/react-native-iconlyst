import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartUpOutline = ({
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
      d="M10.076 16.852a3 3 0 0 1-2.909-2.3L4.647 3.898h-1.4a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .73.578l2.652 11.232a1.5 1.5 0 0 0 1.586 1.14l6.931-.65a1.72 1.72 0 0 0 1.5-1.22l1.833-6.006a.36.36 0 0 0-.343-.466l-2.822.113a.74.74 0 0 1-.779-.719.75.75 0 0 1 .72-.78l2.844-.113a1.95 1.95 0 0 1 1.53.746 1.85 1.85 0 0 1 .29 1.657l-1.833 6a3.22 3.22 0 0 1-2.8 2.277l-6.937.643a1.4 1.4 0 0 1-.273.022"
    />
    <Path
      fill={props.color}
      d="M15.7 12.343h-1.3a3.207 3.207 0 0 1-3.2-3.2V5.574a.75.75 0 1 1 1.5 0V9.14a1.705 1.705 0 0 0 1.7 1.7h1.3a.75.75 0 1 1 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M10.047 8.133a.75.75 0 0 1-.53-1.28l1.9-1.895a.75.75 0 0 1 1.06 0l1.893 1.895a.75.75 0 0 1-1.06 1.06L11.946 6.55l-1.364 1.364a.75.75 0 0 1-.536.22M9.11 21.599a1.231 1.231 0 1 0 0-2.462 1.231 1.231 0 0 0 0 2.462M18.32 21.599a1.231 1.231 0 1 0 0-2.462 1.231 1.231 0 0 0 0 2.462"
    />
  </Svg>
);
export default IconlystShoppingCartUpOutline;
