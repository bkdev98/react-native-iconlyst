import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperCircleBold = ({
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
      d="M10.788 13.336a3.041 3.041 0 0 1 0-6.08 3.04 3.04 0 0 1 3.038 3.04 3.04 3.04 0 0 1-3.038 3.04m8.269-2.038q.504.001.989.08c.124.019.24-.075.24-.201V8.439a.206.206 0 0 0-.23-.202 4 4 0 0 1-.415.022c-1.17 0-2.308-.46-3.166-1.319a4.48 4.48 0 0 1-1.253-3.946.21.21 0 0 0-.202-.248H6.55a.21.21 0 0 0-.202.248 4.5 4.5 0 0 1-1.243 3.945 4.47 4.47 0 0 1-3.17 1.322q-.208 0-.417-.023a.206.206 0 0 0-.23.203v3.724c0 .122.109.215.23.204a4.45 4.45 0 0 1 3.585 1.294A4.5 4.5 0 0 1 6.347 17.6a.21.21 0 0 0 .202.246h5.986c.113 0 .195-.093.195-.205v-.004c0-3.495 2.838-6.339 6.327-6.339"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.788 8.756a1.54 1.54 0 0 0 0 3.08 1.54 1.54 0 0 0 0-3.08M20.202 6.699a.104.104 0 0 0 .084-.103c0-2.165-1.318-3.649-3.31-3.82a.19.19 0 0 0-.194.13 2.97 2.97 0 0 0 .755 2.974c.707.709 1.7 1 2.665.819M4.042 5.881a2.99 2.99 0 0 0 .746-2.974.19.19 0 0 0-.195-.13c-1.989.173-3.304 1.654-3.304 3.82 0 .05.035.094.085.104a2.97 2.97 0 0 0 2.668-.82M1.364 13.904a.094.094 0 0 0-.075.092c0 2.166 1.318 3.65 3.31 3.82a.19.19 0 0 0 .195-.134 2.97 2.97 0 0 0-.751-2.958 2.97 2.97 0 0 0-2.679-.82M19.462 17.897a.75.75 0 0 1-1.5 0v-1.17a.75.75 0 0 1 1.5 0zm-.75-4.6a4.01 4.01 0 0 0-4 4.01 4.01 4.01 0 0 0 4 4.01c2.206 0 4-1.798 4-4.01a4.01 4.01 0 0 0-4-4.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperCircleBold;
