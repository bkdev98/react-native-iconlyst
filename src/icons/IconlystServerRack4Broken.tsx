import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRack4Broken = ({
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
      d="M11.004 3H6.027a3 3 0 0 0-3 3v1.387a3 3 0 0 0 3 3h11.946a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.848M13.156 6.693h3.475M7.39 6.693h.52M11.004 20.998H6.027a3 3 0 0 1-3-3v-1.387a3 3 0 0 1 3-3h11.946a3 3 0 0 1 3 3v1.387a3 3 0 0 1-3 3h-2.848M13.156 17.305h3.475M7.39 17.305h.52"
    />
  </Svg>
);
export default IconlystServerRack4Broken;
