import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnimalPrintCircleLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3.3a9 9 0 1 1 0 18 9 9 0 0 1 0-18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 8.464v-.056m-.007-.168a.247.247 0 1 0 .003.493.247.247 0 0 0-.003-.493M15.578 10.282v-.056m-.007-.168a.247.247 0 1 0 .003.493.247.247 0 0 0-.003-.493M8.434 10.282v-.056m-.008-.168a.247.247 0 1 0 .003.493.247.247 0 0 0-.003-.493"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.033 15.917c1.5 0 3.402 1.3 3.374-.7-.01-1.5-1.573-2.909-3.374-2.91-1.812 0-3.612 1.53-3.362 3.09.276 1.808 2.032.52 3.362.52Z"
    />
  </Svg>
);
export default IconlystAnimalPrintCircleLight;
