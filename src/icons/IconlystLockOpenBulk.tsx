import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockOpenBulk = ({
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
      d="M19.91 14.308v2.13c0 1.66 0 2.5-.35 3.22s-.93 1.3-1.64 1.64c-.72.35-1.55.35-3.22.35H9.3c-1.67 0-2.5 0-3.22-.35-.71-.34-1.29-.92-1.64-1.64s-.35-1.56-.35-3.22v-2.13c0-1.67 0-2.51.35-3.23.34-.71.92-1.3 1.64-1.64.22-.11.46-.18.73-.23.4-.07.88-.1 1.5-.1.29-.01.62-.01.99-.01h5.4c1.66 0 2.5 0 3.22.33.72.35 1.3.94 1.64 1.65.35.72.35 1.56.35 3.23"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.44 6.786a.74.74 0 0 1-.95-.46c-.33-.93-.99-1.67-1.88-2.1s-1.89-.49-2.82-.17a3.72 3.72 0 0 0-2.48 3.46v1.59c-.62 0-1.1.03-1.5.1v-1.69a5.22 5.22 0 0 1 3.49-4.87c1.3-.46 2.71-.38 3.96.23 1.25.6 2.19 1.65 2.64 2.96a.74.74 0 0 1-.46.95M12 13.573a.75.75 0 0 0-.75.75v2.16a.75.75 0 0 0 1.5 0v-2.16a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLockOpenBulk;
