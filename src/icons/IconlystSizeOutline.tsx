import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSizeOutline = ({
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
      d="M4.573 3.831c.89-.954 2.154-1.485 3.64-1.485h7.467c1.49 0 2.755.53 3.645 1.485.883.95 1.339 2.256 1.339 3.714a.75.75 0 0 1-1.5 0c0-1.149-.356-2.067-.937-2.691-.576-.618-1.427-1.008-2.547-1.008H8.214c-1.115 0-1.967.39-2.544 1.008-.582.624-.94 1.543-.94 2.691v7.035c0 1.149.357 2.067.938 2.691.575.618 1.426 1.008 2.546 1.008a.75.75 0 0 1 0 1.5c-1.49 0-2.755-.53-3.644-1.486-.884-.948-1.34-2.255-1.34-3.713V7.545c0-1.46.459-2.766 1.343-3.714"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.625 11.649c.592-.636 1.429-.981 2.39-.981h4.445c.962 0 1.799.345 2.392.981.587.63.879 1.487.879 2.418v4.188c0 .931-.292 1.788-.88 2.418-.592.637-1.43.982-2.391.982h-4.446c-.962 0-1.799-.345-2.392-.982-.586-.63-.878-1.487-.878-2.418v-4.188c0-.932.293-1.788.88-2.418m1.097 1.023c-.285.306-.478.775-.478 1.395v4.188c0 .622.192 1.09.476 1.396.28.3.702.503 1.294.503h4.446c.591 0 1.015-.203 1.294-.503.285-.306.477-.774.477-1.396v-4.188c0-.621-.192-1.09-.477-1.396-.28-.3-.703-.503-1.294-.503h-4.446c-.589 0-1.012.203-1.292.504"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSizeOutline;
