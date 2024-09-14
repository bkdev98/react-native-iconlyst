import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteShieldBulk = ({
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
      d="M11.941 16.265c-.021-1.02-.038-1.9.861-2.827.892-.886 3.909-1.819 4.79-1.819.61 0 2.232.447 3.463 1.004.205.093.445-.054.445-.279v-1.935a.3.3 0 0 0-.3-.3H2.8a.3.3 0 0 0-.3.3v5.44c0 3.302 2.123 5.52 5.282 5.52h4.729c.248 0 .393-.288.263-.5a5.45 5.45 0 0 1-.814-2.9c0-.795-.011-1.332-.019-1.704"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.994 16.202c-.007.386-.02.943-.02 1.765 0 1.671-1.756 2.515-2.382 2.763-.625-.248-2.383-1.092-2.383-2.763 0-.825-.011-1.383-.02-1.769-.004-.233-.01-.39-.008-.503.506-.249 2.084-.794 2.385-.829.357.036 2.002.605 2.438.821 0 .114-.005.274-.01.515m1.123-1.558c-.436-.432-2.997-1.277-3.525-1.277s-3.088.845-3.534 1.287c-.391.403-.385.675-.367 1.574.007.38.018.928.018 1.74 0 3.14 3.518 4.233 3.667 4.278a.8.8 0 0 0 .432 0c.149-.045 3.667-1.138 3.667-4.279 0-.808.01-1.356.019-1.736.018-.924.023-1.173-.377-1.587M16.218 2.367c3.159 0 5.282 2.223 5.282 5.53v.41a.3.3 0 0 1-.3.3H2.8a.3.3 0 0 1-.3-.3v-.41c0-3.307 2.123-5.53 5.283-5.53zm-9.864 4.8H6.29a.75.75 0 0 1 0-1.5c.415 0 .782.336.782.75s-.304.75-.718.75m2.423 0h.063c.414 0 .717-.336.717-.75s-.367-.75-.78-.75a.75.75 0 0 0 0 1.5m2.486 0h.063c.413 0 .717-.336.717-.75s-.366-.75-.78-.75a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebsiteShieldBulk;
