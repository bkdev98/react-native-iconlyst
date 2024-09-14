import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartCircleBroken = ({
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
      d="M12.5 21a9 9 0 1 1 3.19-.582"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.258 12.417c.443-1.382-.072-2.967-1.52-3.434a2.5 2.5 0 0 0-1.158-.082c-.388.067-.754.333-1.07.57-.316-.234-.681-.5-1.069-.566a2.5 2.5 0 0 0-1.159.078c-1.447.471-1.966 2.052-1.523 3.434.684 2.19 3.752 3.624 3.752 3.624s3.022-1.407 3.747-3.624"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartCircleBroken;
