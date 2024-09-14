import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarDownLight = ({
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
      d="M4.784 10.966a7.903 7.903 0 1 1 12.322 6.553"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.27 8.283h-2.285a1.23 1.23 0 1 0 0 2.46h1.406a1.23 1.23 0 0 1 0 2.461h-2.285M12.688 13.203v1.034m0-6.993v1.042M11.269 20.447l2.136.615.615-2.136"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.41 13.977 2.253 3.634 4.93-1.476 2.815 4.926"
    />
  </Svg>
);
export default IconlystDollarDownLight;
