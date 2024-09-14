import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnLeftBold = ({
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
      d="M14.857 19.792H6.42a1 1 0 0 1 0-2h8.437A4.15 4.15 0 0 0 19 13.648a4.147 4.147 0 0 0-4.143-4.142H8.791v1.796a1 1 0 0 1-1.594.805L3.406 9.311c-.017-.014-.024-.036-.041-.05a1 1 0 0 1-.195-.23c-.022-.036-.052-.065-.07-.104a1 1 0 0 1-.1-.421c0-.152.04-.293.1-.422.018-.038.048-.067.07-.104a1 1 0 0 1 .195-.23c.017-.014.024-.036.041-.049l3.791-2.797a1.001 1.001 0 0 1 1.594.805v1.797h6.066A6.15 6.15 0 0 1 21 13.648a6.15 6.15 0 0 1-6.143 6.144"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnLeftBold;
