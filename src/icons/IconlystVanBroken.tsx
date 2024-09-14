import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVanBroken = ({
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
      d="M8.601 16.963a2.3 2.3 0 0 1-.07.53 1.995 1.995 0 0 1-1.867 1.406 1.93 1.93 0 0 1-1.857-1.407 1.9 1.9 0 0 1-.08-.53 1.938 1.938 0 0 1 3.874 0M19.326 16.963a2.3 2.3 0 0 1-.07.53 1.937 1.937 0 0 1-3.724 0 1.9 1.9 0 0 1-.07-.53 1.938 1.938 0 0 1 3.76-.783c.088.25.123.517.104.783M15.461 16.963h-6.86"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.474 17.022h.33a2.147 2.147 0 0 0 2.146-2.157l.05-3.573a1.9 1.9 0 0 0-.33-1.09L18.676 5.91a1.88 1.88 0 0 0-1.537-.808h-6.49M4.466 17.022h-.31A2.157 2.157 0 0 1 2 14.865V7.258A2.157 2.157 0 0 1 4.157 5.1h3.245M15.882 11.74h6.089M5.225 11.74h5.192M13.344 5.16v11.802"
    />
  </Svg>
);
export default IconlystVanBroken;
