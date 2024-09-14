import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnapchatBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.198 16.281c-2.167-.949-3.102-2.006-3.508-3.568.95-1.17 1.785-1.943 2.63-2.42a.751.751 0 0 0-.742-1.306c-.723.411-1.427.99-2.159 1.763a41 41 0 0 1-.04-2.13 5.4 5.4 0 0 0-1.757-3.975c-1.136-1.035-2.61-1.518-4.15-1.384h-.003C8.752 3.53 6.621 5.98 6.616 8.84a35 35 0 0 1-.046 1.901c-.729-.768-1.429-1.344-2.149-1.753a.751.751 0 0 0-.741 1.305c.841.477 1.676 1.247 2.621 2.412-.415 1.622-1.36 2.64-3.503 3.577a.5.5 0 0 0-.295.46.51.51 0 0 0 .303.46c1.728.765 1.795.794 2.424 2.087.267.55.796.924 1.387.98 1.199.096 2.02.461 2.815.816.802.357 1.56.695 2.565.695 1.006 0 1.764-.338 2.567-.695.795-.355 1.616-.72 2.821-.817a1.73 1.73 0 0 0 1.38-.979c.63-1.293.697-1.322 2.434-2.092a.498.498 0 0 0 0-.915"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSnapchatBold;
