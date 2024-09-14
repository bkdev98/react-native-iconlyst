import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockBulk = ({
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
      d="M9.611 15.382a2.39 2.39 0 0 0 2.39 2.39 2.393 2.393 0 0 0 2.39-2.39 2.39 2.39 0 0 0-2.39-2.389 2.39 2.39 0 0 0-2.39 2.39m1.5.001a.89.89 0 0 1 1.78 0 .89.89 0 0 1-1.78 0M17.2 7.485v1.72c-.4-.07-.88-.1-1.5-.1v-1.61a3.705 3.705 0 0 0-3.7-3.64h-.04a3.69 3.69 0 0 0-3.66 3.63v1.62c-.62 0-1.1.03-1.5.1v-1.73a5.186 5.186 0 0 1 5.14-5.12H12c2.84 0 5.17 2.29 5.2 5.13"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLockBulk;
