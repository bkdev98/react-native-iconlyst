import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFavoriteDocumentsBulk = ({
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
      d="M17.24 8.836H6.76c-2.1 0-3.81 1.72-3.81 3.82v5.15c0 2.11 1.71 3.82 3.81 3.82h10.48c2.1 0 3.81-1.71 3.81-3.82v-5.15c0-2.1-1.71-3.82-3.81-3.82"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.719 3.875h6.562a.75.75 0 0 0 0-1.5H8.719a.75.75 0 0 0 0 1.5M6.182 6.987h11.637a.75.75 0 0 0 0-1.5H6.182a.75.75 0 0 0 0 1.5M14.35 16.255l.91-.88c.37-.35.42-.91.11-1.32a1 1 0 0 0-.64-.37l-1.28-.18-.57-1.15c-.1-.19-.26-.35-.44-.44a1 1 0 0 0-.76-.06c-.25.09-.45.27-.57.5l-.56 1.15-1.3.18c-.19.04-.36.12-.54.28-.18.18-.28.43-.28.69 0 .27.1.51.29.71l.93.89-.22 1.26c-.04.21 0 .43.11.63.18.33.51.51.86.51.15 0 .31-.03.46-.11l1.14-.6 1.16.61c.19.09.4.12.6.09.53-.09.89-.59.81-1.14zm-.88-1.24-.5-.07a.99.99 0 0 1-.74-.53l-.23-.47-.23.46c-.15.29-.42.49-.73.54l-.51.07.36.35c.23.23.34.55.28.87l-.08.5.46-.24c.28-.16.63-.16.93.01l.43.23-.08-.49c-.06-.33.05-.66.29-.89z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFavoriteDocumentsBulk;
