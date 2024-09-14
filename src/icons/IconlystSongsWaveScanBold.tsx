import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveScanBold = ({
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
      d="M8.15 20.25H6.894a3.147 3.147 0 0 1-3.143-3.143V15.53a.75.75 0 0 0-1.5 0v1.577a4.65 4.65 0 0 0 4.643 4.643H8.15a.75.75 0 0 0 0-1.5M7.945 9.375a1 1 0 0 0-1 1v3.25a1 1 0 0 0 2 0v-3.25a1 1 0 0 0-1-1M16.055 14.625a1 1 0 0 0 1-1v-3.25a1 1 0 0 0-2 0v3.25a1 1 0 0 0 1 1M12 6.408a1 1 0 0 0-1 1v9.183a1 1 0 0 0 2 0V7.408a1 1 0 0 0-1-1M3 9.22a.75.75 0 0 0 .75-.75V6.893A3.147 3.147 0 0 1 6.893 3.75h1.29a.75.75 0 0 0 0-1.5h-1.29A4.65 4.65 0 0 0 2.25 6.893V8.47c0 .414.336.75.75.75M20.998 14.78a.75.75 0 0 0-.75.75v1.577a3.147 3.147 0 0 1-3.143 3.143h-1.289a.75.75 0 0 0 0 1.5h1.29a4.65 4.65 0 0 0 4.642-4.643V15.53a.75.75 0 0 0-.75-.75M17.107 2.25H15.85a.75.75 0 0 0 0 1.5h1.255a3.147 3.147 0 0 1 3.143 3.143V8.47a.75.75 0 0 0 1.5 0V6.893a4.65 4.65 0 0 0-4.642-4.643"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongsWaveScanBold;
