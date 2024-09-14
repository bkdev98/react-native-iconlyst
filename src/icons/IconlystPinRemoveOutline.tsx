import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinRemoveOutline = ({
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
      d="M7.199 4.908a.75.75 0 0 1 .046 1.06 6.72 6.72 0 0 0-1.77 4.561c0 2.4 1.435 4.844 3.122 6.743a16.4 16.4 0 0 0 2.417 2.24c.36.266.672.464.916.59.185.098.287.13.321.14a1 1 0 0 0 .086-.03q.151-.057.407-.204a10 10 0 0 0 1.244-.887 17.4 17.4 0 0 0 2.996-3.19.75.75 0 1 1 1.216.879 19 19 0 0 1-3.262 3.471 11.4 11.4 0 0 1-1.44 1.024 4.6 4.6 0 0 1-.611.303 1.8 1.8 0 0 1-.635.14c-.348 0-.72-.16-1.016-.315a9 9 0 0 1-1.114-.715 18 18 0 0 1-2.646-2.45c-1.775-1.998-3.501-4.79-3.501-7.739 0-2.15.818-4.106 2.164-5.575a.75.75 0 0 1 1.06-.046"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.69 2.47a.75.75 0 0 1 1.061 0L20.81 18.53a.75.75 0 1 1-1.06 1.06L3.69 3.53a.75.75 0 0 1 0-1.06M12.248 3.754c-.703 0-1.37.1-1.972.31a.75.75 0 1 1-.493-1.417 7.5 7.5 0 0 1 2.465-.393 8.274 8.274 0 0 1 8.278 8.278c0 .835-.134 1.644-.387 2.436a.75.75 0 1 1-1.43-.456c.21-.653.317-1.31.317-1.98a6.774 6.774 0 0 0-6.778-6.778"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinRemoveOutline;
