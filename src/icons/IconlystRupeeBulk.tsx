import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRupeeBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M13.839 8.432a4.5 4.5 0 0 0-.595-1.36H9.598c.927.036 1.72.578 2.12 1.36zM11.835 10.432a2.495 2.495 0 0 1-2.333 1.63H8a1.002 1.002 0 0 0-.707 1.707l5.002 5a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-3.372-3.37a4.51 4.51 0 0 0 3.573-3.553z" />
    </G>
    <Path
      fill={props.color}
      d="M13.839 8.433H16a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16.002 7.073H7.999a1 1 0 0 1-1-1v-.011a1 1 0 0 1 1-1l8.003.01a1 1 0 1 1 0 2"
    />
  </Svg>
);
export default IconlystRupeeBulk;
