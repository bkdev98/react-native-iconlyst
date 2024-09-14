import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindRainyLight = ({
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
      d="M3.114 13.086a3.49 3.49 0 0 0 3.6 0M3.114 19.086a3.49 3.49 0 0 0 3.6 0 3.49 3.49 0 0 1 3.6 0 3.49 3.49 0 0 0 3.6 0 3.49 3.49 0 0 1 3.6 0 3.49 3.49 0 0 0 3.6 0M12.385 10.216s1.892 1.744 1.864 3.495v.002c.02.996-.941 1.722-1.864 1.71-.923.012-1.883-.714-1.864-1.71v-.002c-.028-1.751 1.864-3.495 1.864-3.495M6.196 4.414S8.088 6.158 8.06 7.908v.002c.02.997-.94 1.722-1.864 1.71-.923.012-1.883-.713-1.863-1.71v-.002c-.029-1.75 1.863-3.494 1.863-3.494M17.699 4.521s1.842 1.698 1.814 3.403v.002c.02.97-.916 1.677-1.815 1.665-.898.012-1.833-.695-1.814-1.665v-.002c-.028-1.705 1.814-3.403 1.814-3.403M21.114 13.086a3.49 3.49 0 0 1-3.6 0"
    />
  </Svg>
);
export default IconlystWindRainyLight;
