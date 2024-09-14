import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRicePlateBroken = ({
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
      d="M20.585 15.104a9.3 9.3 0 0 0 .407-1.816 1.013 1.013 0 0 0-1.006-1.128H4.245c-.602 0-1.078.526-1.007 1.123a9.31 9.31 0 0 0 4.72 7.024 3.95 3.95 0 0 0 1.92.483h4.475c.668 0 1.332-.156 1.914-.48a9.3 9.3 0 0 0 2.76-2.34M13.546 9.767a1.655 1.655 0 0 0-2.806-.097M16.133 8.556a1.93 1.93 0 0 0-2.587-2.007M19.928 12.159a1.93 1.93 0 0 0-1.892-2.125"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.536 10.107.065-.34a1.655 1.655 0 0 0-1.255-1.974 1.63 1.63 0 0 0-1.05.119l-.187.094M4.34 12.16a1.844 1.844 0 0 1 .732-2.504c.728-.399 1.704-.314 2.27.236-.115-.78.19-1.662.739-2.311a2.85 2.85 0 0 1 2.485-.995 1.845 1.845 0 0 1 1.626-2.04"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.582 3.21.76 6.682L3 4.535"
    />
  </Svg>
);
export default IconlystRicePlateBroken;
