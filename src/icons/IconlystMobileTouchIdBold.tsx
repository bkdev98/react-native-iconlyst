import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMobileTouchIdBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.894 18.653a1.01 1.01 0 0 1-1.011-1.01 1.012 1.012 0 0 1 2.021 0c0 .557-.453 1.01-1.01 1.01m6.015-6.116q-.364-.001-.698-.1a.36.36 0 0 0-.37.112 2.5 2.5 0 0 1-4.215-.65.35.35 0 0 0-.278-.214A2.5 2.5 0 0 1 9.18 9.207V7.746c0-.558.19-1.067.5-1.482a.35.35 0 0 0 .059-.285 2.49 2.49 0 0 1 .254-1.793q.226-.401.505-.757c.163-.21.021-.536-.244-.536H8.136a4.124 4.124 0 0 0-4.117 4.12l.001 10.76a4.123 4.123 0 0 0 4.117 4.12h5.515a4.123 4.123 0 0 0 4.118-4.12v-4.967c0-.21-.21-.354-.414-.314a2.3 2.3 0 0 1-.447.045"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.8 6.068a.75.75 0 0 0 1.022-.284A3.05 3.05 0 0 1 16.63 4.48a.75.75 0 0 0 .976-.415.75.75 0 0 0-.416-.976c-2.155-.868-4.585.029-5.674 1.956a.75.75 0 0 0 .285 1.022M19.156 4.666a.75.75 0 1 0-1.229.86c.362.517.554 1.122.554 1.75v2.8a.75.75 0 0 0 1.5 0v-2.8c0-.937-.285-1.839-.825-2.61"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.91 10.786a.75.75 0 0 0 .75-.75V7.415a2.24 2.24 0 0 0-2.238-2.24 2.24 2.24 0 0 0-2.237 2.24v.4a.75.75 0 0 0 1.5 0v-.4c0-.407.33-.74.737-.74a.74.74 0 0 1 .737.74v2.62c0 .415.336.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.935 8.846a.75.75 0 0 0-.75.75v1.34a.75.75 0 0 0 1.5 0v-1.34a.75.75 0 0 0-.75-.75M10.93 9.206a.75.75 0 0 0 1.5 0v-1.46a.75.75 0 0 0-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMobileTouchIdBold;
