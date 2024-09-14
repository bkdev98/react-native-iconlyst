import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlideLeftBold = ({
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
      d="m11.056 8.836-.07-4.59a1.774 1.774 0 0 0-3.548.027V14.45l-1.27-1.842a1.94 1.94 0 0 0-2.29-.71c-.945.363-1.45 1.389-1.106 2.34.643 1.773 1.661 3.752 2.973 5.382 2.066 2.57 8.378 2.398 10.637.14 1.77-1.77 2.765-5.379 1.755-8.105-1.004-2.71-4.6-2.581-7.081-2.818M21.276 5.244a.8.8 0 0 0-.001-.61c-.008-.018-.023-.032-.033-.05a.8.8 0 0 0-.136-.204l-1.322-1.322a.79.79 0 0 0-1.119 0 .787.787 0 0 0-.019 1.091h-2.37a.787.787 0 0 0-.02-1.091.79.79 0 0 0-1.118 0L13.816 4.38c-.03.03-.044.069-.069.103-.035.05-.078.096-.1.154a.8.8 0 0 0-.063.304c0 .015.007.027.008.041a.8.8 0 0 0 .053.26q.061.15.175.263l1.318 1.317a.79.79 0 0 0 1.119 0c.3-.3.303-.778.02-1.09h2.367a.788.788 0 0 0 1.14 1.09l1.32-1.32a.8.8 0 0 0 .172-.258"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlideLeftBold;
