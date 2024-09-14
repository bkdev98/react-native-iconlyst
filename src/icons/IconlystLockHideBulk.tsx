import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockHideBulk = ({
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
      d="M19.85 20.5 5.21 5.867A.749.749 0 1 0 4.15 6.93l2.19 2.187c-.035.015-.07.026-.103.042a3.46 3.46 0 0 0-1.626 1.625c-.34.713-.34 1.54-.34 3.186v2.11c0 1.654 0 2.485.34 3.186.341.71.918 1.287 1.625 1.625.71.338 1.538.338 3.188.338h5.328c1.651 0 2.48 0 3.19-.338.038-.019.07-.048.108-.068l.738.738a.75.75 0 0 0 1.061-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.922 5.79a.75.75 0 0 0 1.024-.276 3.59 3.59 0 0 1 3.058-1.794c.95.005 1.875.35 2.565 1.022a3.57 3.57 0 0 1 1.089 2.527v1.554a83 83 0 0 0-.904-.004h-2.288a.5.5 0 0 0-.354.854l6.943 6.94a.498.498 0 0 0 .853-.353v-2.281c0-1.653 0-2.482-.342-3.198a3.55 3.55 0 0 0-1.623-1.622 3 3 0 0 0-.785-.238V7.26a5.06 5.06 0 0 0-1.542-3.594 5.07 5.07 0 0 0-3.631-1.447 5.1 5.1 0 0 0-4.34 2.546.75.75 0 0 0 .277 1.024"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLockHideBulk;
