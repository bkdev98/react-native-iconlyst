import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHealthClipboardBulk = ({
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
      d="M16.642 5.581a2 2 0 0 1 .049.422 1.89 1.89 0 0 1-1.885 1.885h-5.62A1.888 1.888 0 0 1 7.358 5.58a6 6 0 0 0-.528.158c-1.52.58-2.45 2.03-2.45 3.93v7.6c0 2.52 1.62 4.21 4.03 4.21h7.17c2.41 0 4.04-1.69 4.04-4.21v-7.6c0-1.9-.93-3.35-2.45-3.93a6 6 0 0 0-.528-.158"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.113 17.937H8.884a.75.75 0 0 1 0-1.5h6.23a.75.75 0 0 1 0 1.5M12 14.656a.75.75 0 0 1-.75-.75v-.85h-.852a.75.75 0 0 1 0-1.5h.851v-.849a.75.75 0 0 1 1.5 0v.85h.852a.75.75 0 0 1 0 1.5h-.852v.85a.75.75 0 0 1-.75.75M15.338 6.003a.533.533 0 0 1-.532.532h-5.62a.53.53 0 0 1-.523-.532v-.036a.52.52 0 0 1 .523-.487h.153c.406 0 .785-.235.966-.605a1.81 1.81 0 0 1 1.632-1.001h.118c.703 0 1.326.388 1.64 1.01.182.36.56.596.957.596h.154c.288 0 .514.216.532.487zm1.326-.316a1.894 1.894 0 0 0-1.84-1.56 3.17 3.17 0 0 0-2.77-1.606h-.117a3.16 3.16 0 0 0-2.76 1.606 1.894 1.894 0 0 0-1.84 1.56 1.888 1.888 0 0 0 1.849 2.201h5.62a1.89 1.89 0 0 0 1.858-2.201"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHealthClipboardBulk;
