import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveScanOutline = ({
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
      d="M3.25 14.781a.75.75 0 0 1 .75.75v1.577a3.14 3.14 0 0 0 3.143 3.143h1.256a.75.75 0 0 1 0 1.5H7.143A4.64 4.64 0 0 1 2.5 17.108v-1.577a.75.75 0 0 1 .75-.75M8.195 9.625a.75.75 0 0 1 .75.75v3.25a.75.75 0 0 1-1.5 0v-3.25a.75.75 0 0 1 .75-.75M16.305 9.625a.75.75 0 0 1 .75.75v3.25a.75.75 0 0 1-1.5 0v-3.25a.75.75 0 0 1 .75-.75M12.25 6.658a.75.75 0 0 1 .75.75v9.183a.75.75 0 0 1-1.5 0V7.408a.75.75 0 0 1 .75-.75M7.143 3.75A3.14 3.14 0 0 0 4 6.893V8.47a.75.75 0 0 1-1.5 0V6.893A4.64 4.64 0 0 1 7.143 2.25h1.289a.75.75 0 0 1 0 1.5zM21.248 14.781a.75.75 0 0 1 .75.75v1.577a4.64 4.64 0 0 1-4.643 4.643h-1.289a.75.75 0 0 1 0-1.5h1.29a3.14 3.14 0 0 0 3.142-3.143v-1.577a.75.75 0 0 1 .75-.75M15.35 3a.75.75 0 0 1 .75-.75h1.256A4.64 4.64 0 0 1 22 6.893V8.47a.75.75 0 0 1-1.5 0V6.893a3.14 3.14 0 0 0-3.143-3.143H16.1a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongsWaveScanOutline;
