import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag5Light = ({
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
      d="M6.795 6.287h10.41c2.339 0 3.795 1.651 3.795 3.988v6.307c0 2.337-1.456 3.988-3.797 3.988H6.795C4.455 20.57 3 18.92 3 16.582v-6.307c0-2.337 1.462-3.988 3.795-3.988M15.36 6.259v-.61a2.22 2.22 0 0 0-2.22-2.22h-2.28a2.22 2.22 0 0 0-2.22 2.22v.61M21 15.791H3.004M21 10.94H3.004"
    />
  </Svg>
);
export default IconlystBag5Light;
