import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordReloadOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.99 4.347c.985-1.056 2.387-1.648 4.042-1.648h8.435c1.66 0 3.062.591 4.046 1.648C21.49 5.398 22 6.85 22 8.477v2.237a.75.75 0 0 1-1.5 0V8.476c0-1.317-.409-2.38-1.085-3.107-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.944 1.17C4.41 6.097 4 7.16 4 8.477v4.055c0 1.318.409 2.38 1.084 3.107.67.72 1.66 1.17 2.948 1.17h3.892a.75.75 0 0 1 0 1.5H8.032c-1.66 0-3.062-.592-4.045-1.648C3.008 15.609 2.5 14.159 2.5 12.53V8.476c0-1.628.511-3.078 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.338 15.352a2.508 2.508 0 1 0 2.147 3.805.75.75 0 0 1 1.282.777 4.008 4.008 0 1 1 .153-3.875.75.75 0 1 1-1.34.675 2.51 2.51 0 0 0-2.242-1.382"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.25 13.852a.75.75 0 0 1 .75.75v1.793a.75.75 0 0 1-.75.75h-1.803a.75.75 0 0 1 0-1.5H20.5v-1.043a.75.75 0 0 1 .75-.75M11.24 10.445a1.01 1.01 0 1 1 2.021-.002 1.01 1.01 0 0 1-2.02.002M15.145 10.445a1.011 1.011 0 1 1 2.022 0 1.011 1.011 0 0 1-2.023 0M7.334 10.445a1.011 1.011 0 1 1 2.022 0 1.011 1.011 0 0 1-2.022 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordReloadOutline;
