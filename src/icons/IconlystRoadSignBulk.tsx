import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoadSignBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.752 10.505h-1.5l-4.428-.001c-.427 0-.834-.183-1.118-.5L4.362 8.502c-.51-.57-.51-1.43 0-2l1.343-1.503a1.5 1.5 0 0 1 1.12-.499h4.429l1.5.001h4.75c.826 0 1.5.673 1.5 1.5v3.005c0 .827-.674 1.5-1.5 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.294 12.996 1.343 1.502a1.496 1.496 0 0 1 0 2L18.295 18a1.5 1.5 0 0 1-1.119.5l-4.427.001-.002 2.5a.75.75 0 0 1-1.5-.002l.002-2.498-4.753.001a1.5 1.5 0 0 1-1.5-1.5v-3.005c0-.825.673-1.499 1.5-1.5h4.756v-1.992l-4.427-.001c-.427 0-.834-.183-1.118-.5L4.362 8.502c-.51-.57-.51-1.43 0-2l1.343-1.503a1.5 1.5 0 0 1 1.12-.499h4.429V3a.75.75 0 0 1 .75-.75h.002a.75.75 0 0 1 .749.75l-.002 1.501h4.752c.826 0 1.499.673 1.499 1.5v3.005c0 .827-.674 1.5-1.5 1.5l-4.753-.001v1.991h4.425c.426 0 .834.182 1.118.499z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRoadSignBulk;
