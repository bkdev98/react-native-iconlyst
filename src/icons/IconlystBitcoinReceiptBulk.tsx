import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinReceiptBulk = ({
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
      d="M20.4 6.918c0-2.768-1.585-4.42-4.242-4.42h-7.3c-2.631 0-4.266 1.694-4.266 4.419l-.01 12.26c-.001.59.296 1.13.793 1.444a1.7 1.7 0 0 0 1.648.096l.756-.368c.33-.153.709-.163 1.039-.029l2.146.881a4.08 4.08 0 0 0 3.076-.001l2.146-.879c.33-.135.712-.124 1.04.028l.75.358a1.69 1.69 0 0 0 1.64-.086c.503-.314.803-.853.803-1.444z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.48 14.551a2.22 2.22 0 0 0 .564-1.706 2.14 2.14 0 0 0-.56-1.232c.415-.462.62-1.08.56-1.697-.1-1.052-.977-1.88-2.042-1.988v-.14a.75.75 0 0 0-1.5 0v.12h-.78a.75.75 0 0 0-.75.75v5.87c0 .413.337.75.75.75h.78v.12a.75.75 0 0 0 1.5 0v-.139a2.22 2.22 0 0 0 1.479-.708m-1.642-3.704a.7.7 0 0 0 .53-.236.71.71 0 0 0 .184-.552c-.035-.366-.377-.652-.777-.652h-1.303v1.44zm-1.366 1.5h1.302c.401 0 .742.282.776.642a.71.71 0 0 1-.713.788h-1.365z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinReceiptBulk;
