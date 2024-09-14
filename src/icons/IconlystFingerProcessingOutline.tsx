import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFingerProcessingOutline = ({
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
      d="M6.893 3.75A3.14 3.14 0 0 0 3.75 6.892v1.577a.75.75 0 1 1-1.5 0V6.892A4.64 4.64 0 0 1 6.893 2.25h1.29a.75.75 0 0 1 0 1.5zM3 14.781a.75.75 0 0 1 .75.75v1.577a3.14 3.14 0 0 0 3.143 3.142H8.15a.75.75 0 0 1 0 1.5H6.893a4.64 4.64 0 0 1-4.643-4.642v-1.577a.75.75 0 0 1 .75-.75M21 14.781a.75.75 0 0 1 .75.75v1.577a4.64 4.64 0 0 1-4.642 4.642h-1.29a.75.75 0 1 1 0-1.5h1.29a3.14 3.14 0 0 0 3.142-3.142v-1.577a.75.75 0 0 1 .75-.75M15.1 3a.75.75 0 0 1 .75-.75h1.257a4.64 4.64 0 0 1 4.643 4.642v1.577a.75.75 0 1 1-1.5 0V6.892a3.14 3.14 0 0 0-3.143-3.142H15.85A.75.75 0 0 1 15.1 3M9.408 12.238a2.553 2.553 0 1 1 5.106 0v4.272a.75.75 0 0 1-1.5 0v-4.272a1.054 1.054 0 1 0-2.106 0v.483a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 8.242c-1.426 0-2.671.78-3.33 1.94a.75.75 0 1 1-1.304-.742 5.33 5.33 0 0 1 6.688-2.287.75.75 0 1 1-.579 1.384 3.8 3.8 0 0 0-1.474-.295M15.312 8.821a.75.75 0 0 1 1.045.18c.612.868.972 1.928.972 3.07v3.4a.75.75 0 0 1-1.5 0v-3.4c0-.823-.258-1.582-.697-2.205a.75.75 0 0 1 .18-1.045M10.158 14.137a.75.75 0 0 1 .75.75v1.623a.75.75 0 0 1-1.5 0v-1.623a.75.75 0 0 1 .75-.75M7.422 11.883a.75.75 0 0 1 .75.75v2.836a.75.75 0 0 1-1.5 0v-2.836a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFingerProcessingOutline;
