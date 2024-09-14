import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagScanOutline = ({
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
      d="M15.35 3a.75.75 0 0 1 .75-.75h1.257A4.64 4.64 0 0 1 22 6.892v1.577a.75.75 0 1 1-1.5 0V6.892a3.14 3.14 0 0 0-3.143-3.142H16.1a.75.75 0 0 1-.75-.75M7.143 3.75A3.14 3.14 0 0 0 4 6.892v1.577a.75.75 0 1 1-1.5 0V6.892A4.64 4.64 0 0 1 7.143 2.25h1.29a.75.75 0 0 1 0 1.5zM3.25 14.781a.75.75 0 0 1 .75.75v1.577a3.14 3.14 0 0 0 3.143 3.142H8.4a.75.75 0 0 1 0 1.5H7.143A4.64 4.64 0 0 1 2.5 17.108v-1.577a.75.75 0 0 1 .75-.75M21.25 14.781a.75.75 0 0 1 .75.75v1.577a4.64 4.64 0 0 1-4.642 4.642h-1.29a.75.75 0 1 1 0-1.5h1.29a3.14 3.14 0 0 0 3.142-3.142v-1.577a.75.75 0 0 1 .75-.75M7.58 7.429c.598-.643 1.443-.992 2.414-.992h4.508c.973 0 1.819.35 2.418.992.593.637.888 1.503.888 2.445v4.247c0 .941-.295 1.807-.888 2.444-.599.643-1.445.991-2.418.991H9.994c-.972 0-1.818-.348-2.417-.991-.593-.638-.888-1.503-.888-2.444V9.874c0-.943.297-1.808.89-2.445m1.097 1.023c-.292.313-.488.79-.488 1.422v4.247c0 .632.195 1.11.486 1.422.285.306.717.513 1.32.513h4.507c.603 0 1.035-.207 1.32-.514.291-.312.486-.79.486-1.421V9.874c0-.632-.195-1.11-.486-1.423-.285-.306-.717-.514-1.32-.514H9.994c-.599 0-1.031.208-1.317.515"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.338 9.547a.75.75 0 0 1 .75.75 1.163 1.163 0 1 0 2.326 0 .75.75 0 1 1 1.5 0 2.663 2.663 0 1 1-5.326 0 .75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBagScanOutline;
