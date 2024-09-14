import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHelmetOutline = ({
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
      d="M22.25 12.557a9.75 9.75 0 0 1-4.64 8.25c-.609.37-1.337.52-2.049.4l-8.88-1.55a2.92 2.92 0 0 1-1.795-1.07 9.7 9.7 0 0 1-2.136-6.09c0-5.48 4.526-9.91 10.045-9.74 5.216.15 9.484 4.58 9.455 9.8m-2.584-4.085c-1.393-2.428-3.982-4.129-6.916-4.215-4.67-.14-8.5 3.6-8.5 8.24 0 1.95.676 3.74 1.807 5.15.225.29.538.47.881.53l8.879 1.55c.345.06.703-.01 1.006-.2a8.3 8.3 0 0 0 2.772-2.818l-5.765-1.422a3.81 3.81 0 0 1-2.586-2.2l-.602-1.41c-.688-1.61.516-3.39 2.264-3.35zm.584 6.86c.318-.87.494-1.807.5-2.785a8 8 0 0 0-.407-2.56l-7.469-.16a.904.904 0 0 0-.853 1.26l.603 1.41c.284.67.864 1.16 1.566 1.33z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHelmetOutline;
