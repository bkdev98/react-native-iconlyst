import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoSlides2Outline = ({
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
      d="M9.1 4.688a2.375 2.375 0 0 0-2.375 2.375v9.877A2.375 2.375 0 0 0 9.1 19.314h5.985a2.375 2.375 0 0 0 2.375-2.374V7.063a2.375 2.375 0 0 0-2.375-2.375zM5.225 7.063A3.875 3.875 0 0 1 9.1 3.188h5.985a3.875 3.875 0 0 1 3.875 3.875v9.877a3.875 3.875 0 0 1-3.875 3.874H9.1a3.875 3.875 0 0 1-3.875-3.874z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.424 7.535a1.59 1.59 0 0 0-1.59 1.6v5.734c0 .884.714 1.599 1.59 1.599h.55a.75.75 0 0 1 0 1.5h-.55a3.095 3.095 0 0 1-3.09-3.099V9.135a3.09 3.09 0 0 1 3.09-3.1h.55a.75.75 0 1 1 0 1.5zM17.443 6.785a.75.75 0 0 1 .75-.75h.551a3.09 3.09 0 0 1 3.09 3.1v5.734a3.095 3.095 0 0 1-3.09 3.099h-.55a.75.75 0 1 1 0-1.5h.55c.876 0 1.59-.715 1.59-1.599V9.135c0-.891-.712-1.6-1.59-1.6h-.55a.75.75 0 0 1-.75-.75M11.213 10.586c-.098.88-.1 1.83.001 2.83.02.153.08.192.096.2.02.012.11.052.305-.025a6.9 6.9 0 0 0 2.02-1.268c.154-.143.18-.26.18-.326 0-.068-.029-.183-.178-.318l-.003-.003a6.8 6.8 0 0 0-2.026-1.27l-.007-.003c-.15-.063-.244-.037-.282-.018a.15.15 0 0 0-.055.052.4.4 0 0 0-.05.15m.967-1.567c-.505-.211-1.072-.216-1.557.038-.497.26-.82.749-.898 1.34l-.001.014c-.113 1-.114 2.064-.001 3.167l.002.017c.07.556.357 1.052.85 1.329.488.275 1.064.27 1.592.062l.005-.002a8.4 8.4 0 0 0 2.472-1.55l.005-.005c.417-.383.67-.889.667-1.44s-.26-1.048-.67-1.42a8.2 8.2 0 0 0-2.466-1.55"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoSlides2Outline;
