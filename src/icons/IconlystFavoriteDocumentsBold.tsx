import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFavoriteDocumentsBold = ({
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
      d="m12.97 14.945.5.07-.35.34c-.24.23-.35.56-.29.89l.08.49-.43-.23a.94.94 0 0 0-.93-.01l-.46.24.08-.5a.97.97 0 0 0-.28-.87l-.36-.35.51-.07c.31-.05.58-.25.73-.54l.23-.46.23.47c.15.29.43.49.74.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.26 15.375-.91.88.22 1.25a.997.997 0 0 1-.81 1.14c-.2.03-.41 0-.6-.09l-1.16-.61-1.14.6c-.15.08-.31.11-.46.11-.35 0-.68-.18-.86-.51-.11-.2-.15-.42-.11-.63l.22-1.26-.93-.89c-.19-.2-.29-.44-.29-.71 0-.26.1-.51.28-.69.18-.16.35-.24.54-.28l1.3-.18.56-1.15c.12-.23.32-.41.57-.5.27-.08.53-.06.76.06.18.09.34.25.44.44l.57 1.15 1.28.18c.24.03.47.16.64.37.31.41.26.97-.11 1.32m1.98-6.54H6.76c-2.1 0-3.81 1.72-3.81 3.82v5.15c0 2.11 1.71 3.82 3.81 3.82h10.48c2.1 0 3.81-1.71 3.81-3.82v-5.15c0-2.1-1.71-3.82-3.81-3.82M8.719 3.875h6.562a.75.75 0 1 0 0-1.5H8.719a.75.75 0 0 0 0 1.5M6.182 6.987h11.637a.75.75 0 0 0 0-1.5H6.182a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFavoriteDocumentsBold;
