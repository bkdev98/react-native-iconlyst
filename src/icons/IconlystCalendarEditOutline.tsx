import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarEditOutline = ({
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
      d="M3.244 9.664a.75.75 0 0 1 .75-.75h16.194a.75.75 0 0 1 0 1.5H3.994a.75.75 0 0 1-.75-.75M15.728 2.25a.75.75 0 0 1 .75.75v2.962a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M8.456 2.25a.75.75 0 0 1 .75.75v2.962a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.627 4.95c.919-.873 2.198-1.28 3.655-1.28h7.62c1.46 0 2.74.407 3.658 1.281.923.88 1.382 2.142 1.378 3.65v3.023a.75.75 0 0 1-1.5 0V8.597c.003-1.2-.355-2.027-.913-2.56-.565-.538-1.432-.867-2.623-.867h-7.62c-1.187 0-2.055.329-2.621.868-.562.533-.923 1.363-.923 2.56v8.145c0 1.223.364 2.073.928 2.62.568.55 1.434.885 2.616.885H10.5a.75.75 0 0 1 0 1.5H8.282c-1.461 0-2.742-.418-3.66-1.308-.922-.894-1.384-2.17-1.384-3.697V8.6c0-1.509.464-2.769 1.389-3.648"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.61 14.86-3.457 3.772c-.159.18-.258.404-.284.642l-.089.82a.14.14 0 0 0 .162.154l.794-.133c.26-.044.497-.174.67-.369l.007-.007 3.424-3.736.003-.003a.34.34 0 0 0-.018-.48l-.001-.002-.73-.677a.34.34 0 0 0-.481.018m-1.101-1.02a1.84 1.84 0 0 1 2.6-.1l.73.677a1.84 1.84 0 0 1 .103 2.6l-3.42 3.732c-.402.449-.945.745-1.536.845l-.796.133a1.64 1.64 0 0 1-1.901-1.794l.089-.82c.06-.55.29-1.07.66-1.484l.006-.006z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.692 14.724a.75.75 0 0 1 1.06 0l2.244 2.245a.75.75 0 1 1-1.061 1.06l-2.244-2.244a.75.75 0 0 1 0-1.06M7.456 13.282a.75.75 0 1 1 .75.75.75.75 0 0 1-.75-.75M11.134 13.282a.75.75 0 1 1 .75.75.75.75 0 0 1-.75-.75M7.456 16.673a.75.75 0 1 1 .75.75.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarEditOutline;
