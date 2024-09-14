import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterDownloadLight = ({
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
      d="M18.968 4.166a2.636 2.636 0 0 1 2.635 2.636v1.34c0 1.048-.444 2.049-1.223 2.75l-4.836 4.783c-.318.287-.5.695-.5 1.123v1.954c0 .619-.377 1.174-.952 1.404l-1.849.736a1.51 1.51 0 0 1-2.07-1.404V16.32c0-.4-.159-.784-.443-1.068l-4.288-3.818a3.7 3.7 0 0 1-1.085-2.618V6.802a2.636 2.636 0 0 1 2.637-2.636"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.98 8.924V3m2.3 3.615-2.3 2.31-2.298-2.31"
    />
  </Svg>
);
export default IconlystFilterDownloadLight;
