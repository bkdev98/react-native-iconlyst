import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraEditTwoTone = ({
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
      d="M21.5 11.229v4.528a4.106 4.106 0 0 1-4.106 4.106H7.606A4.106 4.106 0 0 1 3.5 15.757v-5.643a3.06 3.06 0 0 1 3.062-3.058c.491-.02.955-.229 1.295-.584.182-.202.476-.698.742-1.182a2.23 2.23 0 0 1 1.954-1.153h3.912"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.222 11.258-.783.131a.88.88 0 0 1-1.018-.96l.088-.809c.043-.389.205-.756.467-1.049l3.413-3.726a1.075 1.075 0 0 1 1.52-.059l.72.667c.437.404.463 1.084.06 1.52l-3.377 3.684c-.284.319-.669.53-1.09.6"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.717 10.68a3.07 3.07 0 0 0-1.022 2.286 3.09 3.09 0 0 0 3.094 3.094c.905 0 1.732-.399 2.287-1.021"
    />
  </Svg>
);
export default IconlystCameraEditTwoTone;
