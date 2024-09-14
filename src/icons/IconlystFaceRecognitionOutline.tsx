import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceRecognitionOutline = ({
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
      d="M6.893 3.75A3.14 3.14 0 0 0 3.75 6.892v1.577a.75.75 0 1 1-1.5 0V6.892A4.64 4.64 0 0 1 6.893 2.25h1.29a.75.75 0 0 1 0 1.5zM3 14.781a.75.75 0 0 1 .75.75v1.577a3.14 3.14 0 0 0 3.143 3.142H8.15a.75.75 0 0 1 0 1.5H6.893a4.64 4.64 0 0 1-4.643-4.642v-1.577a.75.75 0 0 1 .75-.75M21 14.781a.75.75 0 0 1 .75.75v1.577a4.64 4.64 0 0 1-4.642 4.642h-1.29a.75.75 0 1 1 0-1.5h1.29a3.14 3.14 0 0 0 3.142-3.142v-1.577a.75.75 0 0 1 .75-.75M15.1 3a.75.75 0 0 1 .75-.75h1.257a4.64 4.64 0 0 1 4.643 4.642v1.577a.75.75 0 1 1-1.5 0V6.892a3.14 3.14 0 0 0-3.143-3.142H15.85A.75.75 0 0 1 15.1 3M12 7.11a4.89 4.89 0 1 0-.001 9.78 4.89 4.89 0 0 0 0-9.78M5.61 12a6.39 6.39 0 1 1 12.78 0 6.39 6.39 0 1 1-12.78 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.56 9.627a.75.75 0 0 1 .75.75v.058a.75.75 0 0 1-1.5 0v-.058a.75.75 0 0 1 .75-.75m2.934 0a.75.75 0 0 1 .75.75v.058a.75.75 0 1 1-1.5 0v-.058a.75.75 0 0 1 .75-.75M9.882 14.88a.75.75 0 0 0 1.047-.175c.219-.306.607-.522 1.073-.522s.854.216 1.073.522a.75.75 0 0 0 1.22-.871c-.51-.716-1.36-1.151-2.293-1.151s-1.783.435-2.294 1.15a.75.75 0 0 0 .174 1.047"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceRecognitionOutline;
