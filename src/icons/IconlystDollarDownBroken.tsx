import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarDownBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.106 17.52a7.9 7.9 0 0 0 3.484-6.554 7.9 7.9 0 0 0-4.182-6.974M4.784 10.966a7.903 7.903 0 0 1 7.903-7.903M14.27 8.285h-2.285a1.23 1.23 0 1 0 0 2.46h1.406a1.23 1.23 0 0 1 0 2.461h-2.285M12.688 13.205v1.034m0-6.993v1.042M11.269 20.45l2.136.614.615-2.136"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.41 13.979 2.253 3.634 4.93-1.476 2.815 4.926"
    />
  </Svg>
);
export default IconlystDollarDownBroken;
