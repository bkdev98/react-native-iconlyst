import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwap2Broken = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 6.81a6.05 6.05 0 0 0-6.005-.009A6.05 6.05 0 0 0 3.489 12a6.05 6.05 0 0 0 3.006 5.198 6 6 0 0 0 2.143.734M13.998 15l3-3M15.116 9.845 13.998 9M6.498 12h10.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.498 12a6 6 0 1 0-.68 2.776"
    />
  </Svg>
);
export default IconlystSwap2Broken;
