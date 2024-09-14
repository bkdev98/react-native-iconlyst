import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveScanBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M8.72 20.25H7.464a3.147 3.147 0 0 1-3.143-3.143V15.53a.75.75 0 0 0-1.5 0v1.577a4.65 4.65 0 0 0 4.643 4.643H8.72a.75.75 0 0 0 0-1.5M3.57 9.22a.75.75 0 0 0 .75-.75V6.893A3.147 3.147 0 0 1 7.465 3.75h1.289a.75.75 0 0 0 0-1.5h-1.29a4.65 4.65 0 0 0-4.642 4.643V8.47c0 .414.336.75.75.75M21.568 14.78a.75.75 0 0 0-.75.75v1.577a3.147 3.147 0 0 1-3.143 3.143h-1.289a.75.75 0 0 0 0 1.5h1.29a4.65 4.65 0 0 0 4.642-4.643V15.53a.75.75 0 0 0-.75-.75M17.677 2.25H16.42a.75.75 0 0 0 0 1.5h1.256a3.147 3.147 0 0 1 3.143 3.143V8.47a.75.75 0 0 0 1.5 0V6.893a4.65 4.65 0 0 0-4.643-4.643" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.515 9.375a1 1 0 0 0-1 1v3.25a1 1 0 0 0 2 0v-3.25a1 1 0 0 0-1-1M16.625 14.625a1 1 0 0 0 1-1v-3.25a1 1 0 0 0-2 0v3.25a1 1 0 0 0 1 1M12.57 6.408a1 1 0 0 0-1 1v9.183a1 1 0 0 0 2 0V7.408a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongsWaveScanBulk;
