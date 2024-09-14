import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyAddOutline = ({
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
      d="M12.138 21.75a9.75 9.75 0 1 1 9.75-9.75.75.75 0 1 1-1.5 0 8.25 8.25 0 1 0-8.25 8.25.75.75 0 1 1 0 1.5M19.228 21.422a.75.75 0 0 1-.75-.75v-1.386h-1.385a.75.75 0 0 1 0-1.5h1.385v-1.388a.75.75 0 0 1 1.5 0v1.39h1.384a.75.75 0 0 1 0 1.5h-1.384v1.386a.75.75 0 0 1-.75.748"
    />
    <Path
      fill={props.color}
      d="M9.163 10.5a.976.976 0 0 1 0-1.95.975.975 0 0 1 0 1.95M15.664 10.5a.976.976 0 0 1-.002-1.95.975.975 0 0 1 0 1.95zM12.19 16.85a3.6 3.6 0 0 1-3.8-3.35.75.75 0 0 1 .75-.75h6.1a.75.75 0 0 1 .75.75 3.6 3.6 0 0 1-3.8 3.35m-2.1-2.6a2.56 2.56 0 0 0 4.206 0z"
    />
  </Svg>
);
export default IconlystHappyAddOutline;
