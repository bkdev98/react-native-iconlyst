import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReloadPlayVideoBulk = ({
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
      d="M21.837 11.264a.75.75 0 0 0-.751.749 8.25 8.25 0 0 1-3.582 6.792c-3.75 2.575-8.894 1.627-11.467-2.116a8.2 8.2 0 0 1-1.312-6.174A8.18 8.18 0 0 1 8.159 5.22a8.2 8.2 0 0 1 9.528.11l-.541.61a.75.75 0 0 0 .476 1.243l2.593.297a.75.75 0 0 0 .823-.882l-.494-2.666a.75.75 0 0 0-1.3-.36l-.554.626c-3.268-2.47-7.822-2.67-11.382-.213a9.66 9.66 0 0 0-4.058 6.257 9.68 9.68 0 0 0 1.55 7.295 9.73 9.73 0 0 0 8.04 4.216 9.7 9.7 0 0 0 5.513-1.713 9.74 9.74 0 0 0 4.233-8.026.75.75 0 0 0-.75-.751"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.134 8.53c-.488.28-.8.775-.88 1.403a19.7 19.7 0 0 0 0 4.178c.076.62.382 1.114.86 1.397.267.157.568.236.887.236.272 0 .556-.058.843-.173A10.8 10.8 0 0 0 16 13.568l.003-.003c.472-.437.731-.992.728-1.559-.003-.566-.263-1.11-.729-1.535a10.7 10.7 0 0 0-3.154-2.004c-.59-.248-1.215-.224-1.713.062"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReloadPlayVideoBulk;
