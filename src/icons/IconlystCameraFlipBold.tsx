import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraFlipBold = ({
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
      d="M15.093 14.156a.75.75 0 0 1-.75-.75 2.346 2.346 0 0 0-3.894-1.758.75.75 0 0 1-.992-1.125 3.84 3.84 0 0 1 2.542-.96 3.85 3.85 0 0 1 3.844 3.842.75.75 0 0 1-.75.75m-.551 2.13c-.7.621-1.603.963-2.543.963a3.85 3.85 0 0 1-3.843-3.843.75.75 0 0 1 1.5 0 2.346 2.346 0 0 0 2.343 2.343c.573 0 1.122-.208 1.549-.585a.75.75 0 1 1 .994 1.123m3.414-9.436a1.37 1.37 0 0 1-.942-.418c-.045-.05-.224-.272-.638-1.049a2.73 2.73 0 0 0-2.411-1.445h-3.912c-.994 0-1.91.54-2.392 1.41-.435.79-.617 1.024-.665 1.078a1.4 1.4 0 0 1-.933.43A3.567 3.567 0 0 0 2.5 10.416v5.642a4.613 4.613 0 0 0 4.607 4.607h9.787a4.61 4.61 0 0 0 4.606-4.608v-5.644c0-1.964-1.597-3.562-3.544-3.562"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraFlipBold;
