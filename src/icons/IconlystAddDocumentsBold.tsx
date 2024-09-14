import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddDocumentsBold = ({
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
      d="M13.85 16.205h-1.1v1.09a.749.749 0 1 1-1.5 0v-1.09h-1.1a.749.749 0 1 1 0-1.5h1.1v-1.1a.749.749 0 1 1 1.5 0v1.1h1.1a.749.749 0 1 1 0 1.5m3.39-7.37H6.76c-2.1 0-3.81 1.72-3.81 3.82v5.15c0 2.11 1.71 3.82 3.81 3.82h10.48c2.1 0 3.81-1.71 3.81-3.82v-5.15c0-2.1-1.71-3.82-3.81-3.82M8.719 3.875h6.562a.75.75 0 0 0 0-1.5H8.719a.75.75 0 0 0 0 1.5M6.182 6.987h11.637a.75.75 0 0 0 0-1.5H6.182a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAddDocumentsBold;
