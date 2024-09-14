import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXboxBroken = ({
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
      d="M5.803 17.72c1.926-2.626 4.28-5.078 6.947-6.859a23.5 23.5 0 0 1 2.49 1.926M17.194 14.691c.898.961 1.734 1.981 2.503 3.029M6.531 5.5c1.333.642 2.471 1.732 3.522 3.006-.61.471-1.373 1.228-2.134 2.165M6.531 12.62c-.721 1.163-1.332 2.45-1.654 3.739M18.966 5.5c-1.334.642-2.472 1.732-3.523 3.006 1.625 1.256 4.35 4.544 5.177 7.852M7.934 4.4c1.868.088 3.434.808 4.816 2.044 1.381-1.236 2.948-1.956 4.816-2.044"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.75 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-5.344 8.226"
    />
  </Svg>
);
export default IconlystXboxBroken;
