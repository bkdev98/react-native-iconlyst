import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapLightsharp = ({
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
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M16.905 20.15V6.21M12.309 15.555c2.363 0 4.595 2.08 4.595 4.595M21.5 15.555c-2.362 0-4.596 2.08-4.596 4.595M7.595 3.85v13.939M3 8.445c2.362 0 4.595-2.08 4.595-4.595M12.191 8.445c-2.363 0-4.596-2.08-4.596-4.595"
    />
  </Svg>
);
export default IconlystSwapLightsharp;