import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocationBulkcurved = ({
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
      d="M12.25 2.5c-4.411 0-8 3.633-8 8.099 0 5.408 4.654 10.901 8 10.901s8-5.493 8-10.901c0-4.466-3.589-8.099-8-8.099"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.397 10.71a2.866 2.866 0 0 0 2.863 2.863 2.867 2.867 0 0 0 2.864-2.863 2.867 2.867 0 0 0-2.864-2.863 2.866 2.866 0 0 0-2.863 2.863"
    />
  </Svg>
);
export default IconlystLocationBulkcurved;
