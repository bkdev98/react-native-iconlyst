import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFingerprintScanBold = ({
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
      d="M8.149 20.575H6.892a3.144 3.144 0 0 1-3.142-3.14v-1.58a.75.75 0 0 0-1.5 0v1.58a4.646 4.646 0 0 0 4.642 4.64h1.257a.75.75 0 0 0 0-1.5M21 15.106a.75.75 0 0 0-.75.75v1.58c0 1.732-1.41 3.14-3.144 3.14h-1.29a.75.75 0 0 0 0 1.5h1.29a4.647 4.647 0 0 0 4.644-4.64v-1.58a.75.75 0 0 0-.75-.75M10.276 8.983A4.4 4.4 0 0 1 12 8.634a4.493 4.493 0 0 1 4.485 4.491v2.41a.9.9 0 0 0 1.801 0v-2.41c0-3.469-2.82-6.291-6.286-6.291-.84 0-1.656.166-2.426.493a.899.899 0 1 0 .703 1.656M6.862 9.503a6.2 6.2 0 0 0-1.148 3.622v2.4a.9.9 0 1 0 1.8 0v-2.4c0-.938.282-1.829.815-2.577a.9.9 0 0 0-.21-1.256.903.903 0 0 0-1.257.211"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.429 15.535v-2.391a3.433 3.433 0 0 0-3.43-3.43 3.434 3.434 0 0 0-3.43 3.43v2.39a.9.9 0 0 0 1.8 0v-2.39c0-.898.732-1.63 1.63-1.63a1.63 1.63 0 0 1 1.629 1.63v2.39a.9.9 0 0 0 1.8 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 12.654a.9.9 0 0 0-.9.9v1.981a.9.9 0 0 0 1.8 0v-1.98a.9.9 0 0 0-.9-.9M2.999 9.544a.75.75 0 0 0 .75-.75v-1.58c0-1.732 1.41-3.14 3.143-3.14h1.289a.75.75 0 0 0 0-1.5H6.892a4.647 4.647 0 0 0-4.643 4.64v1.58c0 .414.336.75.75.75M17.108 2.575H15.85a.75.75 0 0 0 0 1.5h1.258a3.146 3.146 0 0 1 3.143 3.14v1.58a.75.75 0 1 0 1.5 0v-1.58a4.647 4.647 0 0 0-4.643-4.64"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFingerprintScanBold;
