import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPdfBold = ({
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
      d="M20.155 9.286h-3.08c-1.84-.01-3.35-1.53-3.35-3.38v-3.26c0-.26-.21-.47-.46-.47h-5.35c-2.5 0-4.52 2.06-4.52 4.57v7.12c0 .145.15.243.29.2.231-.071.478-.11.73-.11h1.39c.951 0 1.817.324 2.511.87a.224.224 0 0 0 .305-.032 2.47 2.47 0 0 1 1.874-.848h1.16c1.083 0 2.768 1.01 3.26 1.32a.21.21 0 0 0 .258-.026c.35-.338 1.411-1.294 2.152-1.294h2.5q.257 0 .503.05c.137.029.277-.07.277-.209V9.736c0-.25-.21-.45-.45-.45"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.207 7.805c.699.007 1.67.01 2.494.007a.483.483 0 0 0 .344-.817c-.53-.555-1.265-1.328-2.005-2.106l-2.031-2.132c-.3-.315-.824-.1-.824.338v2.668c0 1.12.913 2.042 2.022 2.042M5.81 18.796h-.647v-1.593h.647a.798.798 0 0 1 0 1.593m0-3.093H4.413a.75.75 0 0 0-.75.75v4.615a.75.75 0 0 0 1.5 0v-.772h.647a2.3 2.3 0 0 0 2.297-2.297 2.3 2.3 0 0 0-2.297-2.296M19.827 15.699h-2.506a.75.75 0 0 0-.75.75v4.626a.75.75 0 0 0 1.5 0v-1.177h1.371a.75.75 0 0 0 0-1.5h-1.371v-1.199h1.756a.75.75 0 0 0 0-1.5M12.757 19.867a1.56 1.56 0 0 1-1.106.457h-.406V17.2h.406c.418 0 .81.162 1.106.458.295.294.458.688.458 1.105s-.163.81-.458 1.104M11.65 15.7h-1.156a.75.75 0 0 0-.75.75v4.625c0 .415.336.75.75.75h1.156c.818 0 1.587-.319 2.166-.898a3.04 3.04 0 0 0 .898-2.165 3.04 3.04 0 0 0-.897-2.166 3.05 3.05 0 0 0-2.167-.896"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentPdfBold;
