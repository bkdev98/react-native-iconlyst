import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperUploadBold = ({
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
      d="M12.002 13.965c-.772 0-1.4.628-1.4 1.399 0 .773.628 1.4 1.4 1.4s1.4-.627 1.4-1.4c0-.771-.628-1.4-1.4-1.4"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.439 19.284h-1.318a.75.75 0 0 1 0-1.5h1.318a.75.75 0 0 1 0 1.5m-5.437-1.02c-1.6 0-2.901-1.3-2.901-2.9a2.903 2.903 0 0 1 2.901-2.899c1.599 0 2.901 1.3 2.901 2.899 0 1.6-1.302 2.9-2.901 2.9m-4.122-5.32H6.562a.75.75 0 0 1 0-1.5H7.88a.75.75 0 0 1 0 1.5m9.582-3.84H6.538c-2.093 0-3.498 1.467-3.498 3.651v5.219c0 2.184 1.406 3.651 3.499 3.651h10.923c2.092 0 3.498-1.467 3.498-3.651v-5.219c0-2.184-1.406-3.651-3.498-3.651M10.381 5.665l.728-.728v2.337a.75.75 0 1 0 1.5 0V4.937l.728.728a.75.75 0 1 0 1.061-1.061L12.39 2.595a.76.76 0 0 0-.53-.22.74.74 0 0 0-.53.22L9.32 4.604a.75.75 0 1 0 1.061 1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperUploadBold;
