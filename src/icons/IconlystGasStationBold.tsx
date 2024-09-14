import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGasStationBold = ({
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
      d="M14.643 10.254c0 1.307-.884 2.22-2.15 2.22h-4.1c-1.266 0-2.15-.913-2.15-2.22v-2.33c0-1.286.904-2.22 2.15-2.22h4.1c1.266 0 2.15.913 2.15 2.22zm-2.96 7.99H9.21a.75.75 0 0 1 0-1.5h2.473a.75.75 0 0 1 0 1.5m9.84-10.29-1.849-1.85a.749.749 0 1 0-1.06 1.06l1.629 1.631v7.22c0 .21-.169.38-.377.38a.384.384 0 0 1-.377-.38v-1.43a1.88 1.88 0 0 0-1.876-1.88h-.494v-6.26c0-2.363-1.52-3.95-3.782-3.95H7.549c-2.261 0-3.781 1.587-3.781 3.95v13.8h-.761a.75.75 0 0 0 0 1.5h14.875a.75.75 0 0 0 0-1.5h-.763v-6.04h.494c.204 0 .376.173.376.38v1.43c0 1.035.842 1.88 1.877 1.88a1.88 1.88 0 0 0 1.877-1.88v-7.53a.75.75 0 0 0-.22-.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.493 7.204h-4.1c-.537 0-.65.392-.65.72v2.33c0 .328.113.72.65.72h1.243l.698-2.025a.75.75 0 0 1 1.418.489l-.529 1.536h1.27c.537 0 .65-.392.65-.72v-2.33c0-.328-.113-.72-.65-.72"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGasStationBold;
