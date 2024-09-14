import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCopyrightInfringementBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M5.273 5.334A9.46 9.46 0 0 0 3 11.5a9.5 9.5 0 0 0 9.5 9.5 9.46 9.46 0 0 0 6.166-2.273zM6.334 4.273l13.393 13.393A9.46 9.46 0 0 0 22 11.5 9.5 9.5 0 0 0 12.5 2a9.46 9.46 0 0 0-6.166 2.273" />
    </G>
    <Path
      fill={props.color}
      d="M10.868 8.807a3.25 3.25 0 0 1 3.68.645.75.75 0 0 0 1.06-1.06 4.75 4.75 0 0 0-5.845-.69zM15.317 15.378a4.75 4.75 0 0 1-6.695-6.695L9.688 9.75a3.25 3.25 0 0 0 4.563 4.563z"
    />
  </Svg>
);
export default IconlystCopyrightInfringementBulk;
