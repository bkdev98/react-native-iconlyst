import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationLeftOutline = ({
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
      d="M17.755 21.757q-.24 0-.474-.046l-3.942-.766h-.484l-3.941.766a2.414 2.414 0 0 1-2.064-4.17l4.233-3.76a3.03 3.03 0 0 1 4.033 0l4.232 3.76a2.413 2.413 0 0 1-1.588 4.216zm-4.977-2.312h.633q.072 0 .143.013l4.013.78a.912.912 0 0 0 .78-1.576l-4.232-3.76a1.53 1.53 0 0 0-2.04 0l-4.233 3.76a.912.912 0 0 0 .78 1.576l4.013-.78a1 1 0 0 1 .146-.013zM7.713 8.866a.75.75 0 0 1-.524-.213L4.575 6.1a.75.75 0 0 1 0-1.072L7.19 2.474a.75.75 0 1 1 1.048 1.072L6.172 5.564 8.237 7.58a.749.749 0 0 1-.524 1.286"
    />
    <Path
      fill={props.color}
      d="M13.099 10.883a.75.75 0 0 1-.75-.75 3.67 3.67 0 0 0-3.823-3.82H5.1a.75.75 0 1 1 0-1.5h3.428a5.13 5.13 0 0 1 5.32 5.32.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystNavigationLeftOutline;
