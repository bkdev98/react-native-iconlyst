import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterDownloadTwoTone = ({
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
      d="M17.987 4.166a2.636 2.636 0 0 1 2.636 2.636v1.34c0 1.048-.445 2.049-1.223 2.75l-4.837 4.783c-.318.287-.5.695-.5 1.123v1.954c0 .619-.376 1.174-.951 1.404l-1.85.736a1.51 1.51 0 0 1-2.07-1.404V16.32c0-.4-.158-.784-.442-1.068l-4.288-3.818a3.7 3.7 0 0 1-1.085-2.618V6.802a2.636 2.636 0 0 1 2.637-2.636"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 8.924V3M14.3 6.615 12 8.925l-2.299-2.31"
    />
  </Svg>
);
export default IconlystFilterDownloadTwoTone;
