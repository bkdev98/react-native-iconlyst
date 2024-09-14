import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayRemoveTwoTone = ({
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
      d="M7.528 3.285h9.943a4.03 4.03 0 0 1 4.029 4.03v5.456a4.03 4.03 0 0 1-4.03 4.029H7.529A4.03 4.03 0 0 1 3.5 12.77V7.315a4.03 4.03 0 0 1 4.028-4.029M7.555 20.715h9.888"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.485 8.156-3.971 3.972m3.971 0-3.971-3.972M10.383 16.799l-.637 3.917M14.615 16.799l.637 3.917"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMonitorDisplayRemoveTwoTone;
