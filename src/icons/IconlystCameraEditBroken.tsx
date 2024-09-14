import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraEditBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.106 19.863A4.106 4.106 0 0 1 3 15.757v-5.643a3.06 3.06 0 0 1 3.062-3.058c.491-.02.955-.229 1.295-.584.182-.202.476-.698.742-1.182a2.23 2.23 0 0 1 1.954-1.153h3.912M21 11.23v4.529a4.106 4.106 0 0 1-4.106 4.106h-6.078M20.188 6.975a1.075 1.075 0 0 0-.059-1.52l-.72-.667a1.075 1.075 0 0 0-1.52.059l-3.414 3.726c-.261.293-.424.66-.467 1.05l-.087.808a.88.88 0 0 0 1.018.96l.783-.131a1.88 1.88 0 0 0 1.09-.6l1.192-1.302"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.217 10.682a3.07 3.07 0 0 0-1.022 2.286 3.09 3.09 0 0 0 3.094 3.094c.905 0 1.732-.399 2.287-1.021"
    />
  </Svg>
);
export default IconlystCameraEditBroken;
