import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForefingerLight = ({
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
      d="M19.407 11.627c.952 2.57.015 5.97-1.653 7.638-1.912 1.912-5.972 2.23-8.502 1.022-1.615-.771-3.309-1.98-4.322-2.752a1.86 1.86 0 0 1-.672-1.892 1.95 1.95 0 0 1 2.88-1.266l1.226.708a.64.64 0 0 0 .96-.555V4.672a1.672 1.672 0 0 1 3.343-.026l.067 4.325c2.34.223 5.727.102 6.673 2.656"
    />
  </Svg>
);
export default IconlystForefingerLight;
