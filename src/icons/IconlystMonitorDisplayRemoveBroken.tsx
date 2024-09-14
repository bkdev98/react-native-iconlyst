import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayRemoveBroken = ({
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
      d="M12.5 3.285H7.527A4.03 4.03 0 0 0 3.5 7.315v5.456A4.03 4.03 0 0 0 7.528 16.8h9.943a4.03 4.03 0 0 0 4.029-4.03V7.315a4.03 4.03 0 0 0-4.03-4.029h-1.45M7.555 20.715h9.888M14.485 8.156l-3.971 3.972m3.971 0-3.971-3.972M10.383 16.799l-.637 3.917M14.615 16.799l.637 3.917"
    />
  </Svg>
);
export default IconlystMonitorDisplayRemoveBroken;
