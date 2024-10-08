import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarPinOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.75a6.776 6.776 0 0 0-6.776 6.777c0 2.403 1.435 4.847 3.122 6.747a16.4 16.4 0 0 0 2.415 2.24c.36.266.673.463.916.59.188.099.29.13.323.141.032-.01.134-.042.322-.14.244-.128.556-.325.916-.591a16.4 16.4 0 0 0 2.415-2.24c1.687-1.9 3.123-4.344 3.123-6.747A6.776 6.776 0 0 0 12.25 3.75m-8.276 6.777a8.276 8.276 0 1 1 16.552 0c0 2.952-1.726 5.744-3.501 7.743a18 18 0 0 1-2.645 2.45 9 9 0 0 1-1.114.715c-.296.154-.668.315-1.016.315s-.72-.16-1.017-.316a9 9 0 0 1-1.113-.714 18 18 0 0 1-2.646-2.45c-1.775-1.999-3.5-4.791-3.5-7.743"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.25 9.984c-1.33 0-2.66-.09-3.99-.28a.754.754 0 0 1-.64-.85c.06-.41.43-.7.85-.64 2.51.36 5.05.36 7.55 0 .41-.06.79.23.85.64s-.23.79-.64.85c-1.32.19-2.66.28-3.99.28z"
    />
    <Path
      fill={props.color}
      d="M14.19 13.754c-.17-.07-.31-.17-.43-.29-.11-.11-.2-.26-.25-.42-.02-.07-.04-.14-.05-.21h-2.38a1.291 1.291 0 0 1-.32.64c-.11.12-.25.21-.41.28-.17.07-.34.1-.5.09h-.91c-.15 0-.31-.02-.47-.09s-.29-.16-.41-.28-.2-.27-.26-.42c-.05-.13-.07-.29-.06-.45v-1.97c0-.49.16-.97.45-1.37l.5-.68.44-1.21c.1-.28.27-.53.5-.72s.51-.32.8-.37c1.22-.19 2.45-.19 3.67 0 .3.05.58.18.81.37s.4.44.5.73l.44 1.22.48.64c.3.41.46.89.46 1.4v2c.01.1 0 .28-.07.44-.05.14-.14.29-.26.41-.1.12-.25.21-.41.28-.16.06-.32.09-.49.09-.46 0-.93.047-1.37-.11m-3.55-2.44h3.23c.14 0 .27.03.41.08.12.05.24.13.35.23.09.09.17.21.23.34.05.13.07.24.08.36h.35v-1.72c0-.18-.06-.35-.17-.5l-.49-.65c-.09-.12-.15-.24-.2-.37l-.44-1.23-.06-.08c-1.14-.2-2.21-.2-3.28-.04l-.13.12-.44 1.22c-.05.14-.12.26-.2.36l-.49.68c-.1.14-.16.32-.16.49v1.72h.34c0-.12.03-.23.08-.34.05-.13.13-.25.23-.36a1.045 1.045 0 0 1 .76-.31"
    />
  </Svg>
);
export default IconlystCarPinOutline;
