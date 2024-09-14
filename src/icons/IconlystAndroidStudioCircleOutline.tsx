import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAndroidStudioCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.75 8.652a1.107 1.107 0 1 0 0 2.215 1.107 1.107 0 0 0 0-2.215M9.143 9.76a2.607 2.607 0 1 1 5.214 0 2.607 2.607 0 0 1-5.214 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.75 6.266a.75.75 0 0 1 .75.75V7.9a.75.75 0 1 1-1.5 0v-.886a.75.75 0 0 1 .75-.75M11.149 10.694a.75.75 0 0 1 .296 1.019l-2.88 5.24a.75.75 0 1 1-1.314-.722l2.879-5.24a.75.75 0 0 1 1.018-.297M12.348 10.694a.75.75 0 0 1 1.018.297l2.88 5.24a.75.75 0 0 1-1.315.722l-2.88-5.24a.75.75 0 0 1 .297-1.019"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.092 9.113a.75.75 0 0 1 .75.75 5.385 5.385 0 0 1-7.826 4.803.75.75 0 0 1 .68-1.337 3.885 3.885 0 0 0 5.646-3.465.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAndroidStudioCircleOutline;
