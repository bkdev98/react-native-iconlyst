import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoardBulk = ({
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
      d="M7.36 17.73h9.28a4.265 4.265 0 0 0 4.26-4.26V8.38a4.265 4.265 0 0 0-4.26-4.26H7.36A4.265 4.265 0 0 0 3.1 8.38v5.09a4.265 4.265 0 0 0 4.26 4.26"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.75 3v1.12h-1.5V3a.75.75 0 0 1 1.5 0M7.793 20.475l2.695-2.745h3.026l2.694 2.745a.749.749 0 1 1-1.07 1.05L12 18.33l-3.138 3.195a.749.749 0 1 1-1.07-1.05M9.086 9.79h5.828a.75.75 0 0 0 0-1.5H9.086a.75.75 0 0 0 0 1.5M9.086 13.269h3.017a.75.75 0 1 0 0-1.5H9.086a.75.75 0 0 0 0 1.5"
    />
  </Svg>
);
export default IconlystBoardBulk;
