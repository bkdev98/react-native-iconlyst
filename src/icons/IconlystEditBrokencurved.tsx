import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditBrokencurved = ({
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
      d="M13.604 19.379h6.377M5.317 14.332c-1.739 2.318-.094 5.19-.094 5.19s3.244.746 4.958-1.54l6.752-8.994a3.042 3.042 0 0 0-4.864-3.651L6.91 12.209M12.777 8.64l2.86 2.093"
    />
  </Svg>
);
export default IconlystEditBrokencurved;
