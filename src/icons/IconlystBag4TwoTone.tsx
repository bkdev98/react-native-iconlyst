import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag4TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 10.275c0-2.337 1.462-3.988 3.795-3.988h10.409c2.34 0 3.796 1.651 3.796 3.988v6.307c0 2.337-1.456 3.988-3.797 3.988H7.295c-2.34 0-3.795-1.65-3.795-3.988z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.02 16.635v-5.871M12.5 16.635v-5.871M16.98 16.635v-5.871M15.86 6.287V5.65a2.22 2.22 0 0 0-2.22-2.22h-2.28c-1.226 0-2.22.994-2.22 2.22v.638"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBag4TwoTone;
