import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPillsBoxBulk = ({
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
      d="M18.27 10.07v8.91a2.97 2.97 0 0 1-2.97 2.93H8.69c-1.62 0-2.94-1.31-2.96-2.93v-8.91c0-.21.02-.42.07-.62.12-.57.4-1.1.83-1.51l1.98-1.53c.08-.07.19-.1.3-.1h6.17a.5.5 0 0 1 .31.1l1.93 1.49c.46.44.76.98.88 1.55.05.21.07.41.07.62"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.148 5.49h7.695a1.19 1.19 0 0 0 1.187-1.191v-1.03c0-.65-.532-1.18-1.187-1.18H8.148c-.654 0-1.186.53-1.186 1.18V4.3a1.19 1.19 0 0 0 1.186 1.19M11.996 11.678a.75.75 0 0 0-.75.75v.94h-.938a.75.75 0 1 0 0 1.5h.938v.941a.75.75 0 0 0 1.5 0v-.94h.938a.75.75 0 1 0 0-1.5h-.938v-.94a.75.75 0 0 0-.75-.75M5.73 18.98h12.54v-1.5H5.73zM18.2 9.45H5.8c-.05.2-.07.41-.07.62v.88h12.54v-.88c0-.21-.02-.41-.07-.62"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPillsBoxBulk;
