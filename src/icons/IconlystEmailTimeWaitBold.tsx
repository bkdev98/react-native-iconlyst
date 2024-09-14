import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailTimeWaitBold = ({
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
      d="M10.775 12.825q-.9 0-1.8-.6l-4-3.3c-.3-.3-.4-.7-.1-1.1s.7-.4 1.1-.1l4 3.2c.5.4 1.2.4 1.6 0l4-3.2c.3-.3.8-.2 1.1.1.3.4.3.9-.1 1.2l-4 3.2q-.75.6-1.8.6m8.3-1.7q.48.001.941.068a.312.312 0 0 0 .36-.304V8.125c0-3.1-2.2-5.5-5.1-5.5h-8.8c-2.9 0-5.1 2.4-5.1 5.5v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.1 1.4 3.5 1.4h5.674c.2 0 .344-.192.3-.387a6.7 6.7 0 0 1-.175-1.513c0-3.749 3.051-6.8 6.8-6.8"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.575 19.875c-1.382 0-2.55-1.168-2.55-2.55 0-1.383 1.168-2.55 2.55-2.55s2.55 1.167 2.55 2.55-1.168 2.55-2.55 2.55m0-6.6c-2.195 0-4.05 1.854-4.05 4.05a4.055 4.055 0 0 0 4.05 4.05 4.055 4.055 0 0 0 4.05-4.05c0-2.196-1.855-4.05-4.05-4.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.934 17.567-.709-.387v-.955a.75.75 0 0 0-1.5 0v1.4c0 .275.15.528.391.659l1.1.599a.75.75 0 1 0 .719-1.316"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailTimeWaitBold;
