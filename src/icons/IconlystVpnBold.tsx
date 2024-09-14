import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVpnBold = ({
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
      d="M19.114 17H4.89a.5.5 0 0 0-.397.804c.27.352.529.651.79.91A9.43 9.43 0 0 0 12 21.5h.002a9.43 9.43 0 0 0 6.717-2.784c.258-.255.51-.544.791-.911a.501.501 0 0 0-.396-.805M4.89 7h14.225a.5.5 0 0 0 .396-.805 9 9 0 0 0-.79-.909A9.43 9.43 0 0 0 12 2.5a9.43 9.43 0 0 0-6.713 2.783c-.258.255-.51.545-.793.912A.501.501 0 0 0 4.89 7M6.066 15.29a.75.75 0 0 0 .697-.473l1.949-4.9a.75.75 0 0 0-.42-.975.753.753 0 0 0-.974.42L6.066 12.51 4.814 9.36a.751.751 0 0 0-1.394.555l1.949 4.9a.75.75 0 0 0 .697.474M12.823 11.16c0 .425-.347.77-.773.77h-.625v-1.54h.625c.426 0 .772.345.772.77m-2.148-2.27a.75.75 0 0 0-.75.75v4.87a.75.75 0 0 0 1.5 0v-1.08h.625a2.274 2.274 0 0 0 2.272-2.27 2.274 2.274 0 0 0-2.271-2.27zM19.884 8.95a.75.75 0 0 0-.75.75v2.39l-2.058-2.713a.749.749 0 0 0-1.348.453v4.62a.75.75 0 0 0 1.5 0v-2.39l2.057 2.713a.75.75 0 0 0 1.348-.453V9.7a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVpnBold;
