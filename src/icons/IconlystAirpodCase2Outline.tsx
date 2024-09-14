import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodCase2Outline = ({
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
      d="M8.765 3.75a3.567 3.567 0 0 0-3.567 3.567v.623h1.997a2.15 2.15 0 0 1 2.011-1.395h6.086c.92 0 1.707.58 2.01 1.395h1.999v-.623a3.567 3.567 0 0 0-3.567-3.567zm12.036 4.901V7.317c0-2.799-2.27-5.067-5.067-5.067H8.765a5.067 5.067 0 0 0-5.067 5.067v9.365a5.07 5.07 0 0 0 5.067 5.068h6.969a5.07 5.07 0 0 0 5.067-5.068V8.728a1 1 0 0 0 0-.077m-1.5.789h-1.999a2.15 2.15 0 0 1-2.01 1.394H9.206c-.92 0-1.706-.58-2.01-1.394H5.198v7.242a3.57 3.57 0 0 0 3.567 3.568h6.969a3.57 3.57 0 0 0 3.567-3.568zM8.56 8.714c.013.345.297.62.645.62h6.086a.645.645 0 1 0 0-1.29H9.206a.644.644 0 0 0-.645.67"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirpodCase2Outline;
