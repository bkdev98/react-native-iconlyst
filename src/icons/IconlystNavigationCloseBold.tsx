import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationCloseBold = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.1 12.988a.426.426 0 0 0 .238-.58L13.59 4.884a2.45 2.45 0 0 0-2.21-1.368h-.01A2.45 2.45 0 0 0 9.16 4.903L3.293 16.929a2.45 2.45 0 0 0 .428 2.78 2.44 2.44 0 0 0 2.754.575l4.32-1.83a1.48 1.48 0 0 1 1.136-.004l.919.381c.222.092.46-.084.46-.324a5.915 5.915 0 0 1 3.79-5.519M19.476 17.912l1.265-1.265a.75.75 0 1 0-1.061-1.06l-1.264 1.264-1.265-1.265a.75.75 0 1 0-1.061 1.061l1.265 1.265-1.265 1.265a.75.75 0 1 0 1.06 1.061l1.266-1.265 1.264 1.265a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNavigationCloseBold;
