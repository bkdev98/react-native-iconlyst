import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSleepingLight = ({
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
      d="M10.99 3.594H7.575C4.763 3.594 3 5.584 3 8.403v7.602c0 2.819 1.755 4.81 4.575 4.81h8.07c2.82 0 4.576-1.991 4.576-4.81v-2.948"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.274 16.847a1.724 1.724 0 0 1-1.723-1.723v-.733a1.723 1.723 0 0 1 3.446 0v.733c0 .951-.772 1.723-1.723 1.723"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.519 9.176c.26.338.643.55 1.068.55s.81-.212 1.07-.55M12.892 9.176c.26.338.643.55 1.068.55s.81-.212 1.07-.55M18.303 6.695H21l-2.697 2.976H21M14.785 3.184h1.936l-1.936 2.134h1.936"
    />
  </Svg>
);
export default IconlystSleepingLight;
