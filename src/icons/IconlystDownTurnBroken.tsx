import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownTurnBroken = ({
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
      d="m12.562 17.188 3.053 3.054M17.676 18.313c.32-.32.596-.729.993-1.125M15.616 20.24V9.383a5.14 5.14 0 0 0-4.83-5.133M5.33 17.825V9.387a5.14 5.14 0 0 1 2.472-4.395"
    />
  </Svg>
);
export default IconlystDownTurnBroken;
