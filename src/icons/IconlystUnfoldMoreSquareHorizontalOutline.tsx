import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnfoldMoreSquareHorizontalOutline = ({
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
      d="M17.543 20.972H6.46c-1.56 0-2.882-.556-3.81-1.553-.924-.991-1.402-2.357-1.402-3.886v-7.12c0-1.528.478-2.894 1.401-3.885.929-.997 2.252-1.553 3.812-1.553h11.08c1.561 0 2.883.556 3.812 1.553.922.991 1.4 2.357 1.4 3.886v7.12c0 1.529-.48 2.895-1.404 3.885-.929.997-2.25 1.553-3.807 1.553m-11.082-1.5h11.082c1.185 0 2.094-.414 2.71-1.075.622-.667 1-1.646 1-2.864v-7.12c0-1.218-.377-2.196-.997-2.863-.615-.66-1.523-1.075-2.713-1.075H6.463c-1.191 0-2.1.415-2.715 1.075-.62.667-.999 1.645-.999 2.864v7.12c0 1.218.378 2.196.999 2.863.615.66 1.524 1.075 2.713 1.075"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.446 8.44a.75.75 0 0 0 0 1.06l2.47 2.47-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0M10.507 8.44a.75.75 0 0 1 0 1.06l-2.47 2.47 2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUnfoldMoreSquareHorizontalOutline;
