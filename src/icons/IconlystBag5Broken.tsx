import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag5Broken = ({
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
      d="M12.499 20.57h5.204c2.34 0 3.797-1.65 3.797-3.988v-6.307c0-2.337-1.456-3.988-3.796-3.988H7.294c-2.332 0-3.794 1.651-3.794 3.988v6.307c0 2.337 1.456 3.988 3.795 3.988h1.602M15.86 6.259v-.61a2.22 2.22 0 0 0-2.22-2.22h-2.28c-1.226 0-2.22.994-2.22 2.22v.61M21.5 15.791H3.504M17.962 10.94H3.504"
    />
  </Svg>
);
export default IconlystBag5Broken;
