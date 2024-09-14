import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteShieldBold = ({
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
      d="M11.326 7.171h-.064a.75.75 0 0 1 0-1.5c.415 0 .781.336.781.75s-.303.75-.717.75m-2.486 0h-.063a.75.75 0 0 1 0-1.5c.414 0 .78.336.78.75s-.303.75-.717.75m-2.486 0H6.29a.75.75 0 0 1 0-1.5c.414 0 .782.336.782.75s-.305.75-.72.75m15.146.73c0-3.307-2.123-5.53-5.282-5.53H7.783c-3.16 0-5.283 2.223-5.283 5.53v.41a.3.3 0 0 0 .3.3h18.4a.3.3 0 0 0 .3-.3zM11.94 16.268c-.02-1.02-.037-1.9.862-2.827.892-.886 3.909-1.819 4.79-1.819.61 0 2.232.447 3.462 1.004.206.093.446-.054.446-.28v-1.934a.3.3 0 0 0-.3-.3H2.8a.3.3 0 0 0-.3.3v5.44c0 3.302 2.123 5.52 5.282 5.52h4.729c.248 0 .393-.288.263-.5a5.45 5.45 0 0 1-.814-2.9c0-.795-.011-1.332-.02-1.704"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.994 16.206c-.007.386-.02.943-.02 1.765 0 1.671-1.756 2.515-2.382 2.763-.625-.248-2.383-1.092-2.383-2.763 0-.825-.011-1.383-.02-1.769-.004-.233-.01-.39-.008-.503.506-.249 2.084-.794 2.385-.829.357.036 2.002.605 2.438.821 0 .114-.005.274-.01.515m1.123-1.558c-.436-.432-2.997-1.277-3.525-1.277s-3.088.845-3.534 1.287c-.391.403-.385.675-.367 1.574.007.38.018.928.018 1.74 0 3.14 3.518 4.233 3.667 4.278a.8.8 0 0 0 .432 0c.149-.045 3.667-1.138 3.667-4.279 0-.808.01-1.356.019-1.736.018-.924.023-1.173-.377-1.587"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebsiteShieldBold;
