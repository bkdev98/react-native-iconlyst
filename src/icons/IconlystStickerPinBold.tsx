import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerPinBold = ({
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
      d="M20.648 15.427c-.925-.003-2.014 0-2.798.008-1.244 0-2.269 1.035-2.269 2.291v2.994c0 .49.588.733.925.38l2.278-2.393 2.25-2.363a.542.542 0 0 0-.386-.917M12.115 12.32l-2.14.03a.9.9 0 0 0-.43.01l-2.05.03c0-.29.13-.56.34-.74.87-.48 1.03-.8 1.08-.91.22-.44.2-1.23.02-1.64-.04-.09-.16-.37-.74-.8-.1-.1-.13-.24-.08-.36.05-.13.17-.21.31-.21h2.69c.14 0 .26.08.31.21.05.12.02.26-.01.3-.65.49-.77.77-.81.86-.17.41-.2 1.2.02 1.64.05.11.21.43 1.08.91.22.18.35.45.41.67"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.115 13.82h-1.59v1.29a.749.749 0 1 1-1.5 0v-1.29h-1.6c-.79 0-1.43-.64-1.43-1.43 0-.77.36-1.51.98-1.97l.09-.06c.18-.1.4-.23.51-.32 0-.09 0-.23-.01-.32a21 21 0 0 0-.34-.29c-.61-.58-.78-1.36-.5-2.05.28-.7.94-1.15 1.7-1.15h2.69c.76 0 1.42.45 1.7 1.15.28.69.11 1.48-.43 1.99-.18.15-.33.28-.41.35-.01.09-.01.23 0 .32.11.09.34.23.5.32l.09.06c.62.46.98 1.2.98 1.97 0 .79-.64 1.43-1.43 1.43m4.48-11.57h-8.94c-2.92 0-5.31 2.4-5.31 5.35v9.03c0 2.81 2.27 5.12 5.08 5.12h6c.29 0 .52-.24.52-.52v-3.66c0-2.08 1.7-3.78 3.76-3.79h3.45c.28 0 .5-.23.5-.52V7.35c0-2.82-2.26-5.1-5.06-5.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerPinBold;
