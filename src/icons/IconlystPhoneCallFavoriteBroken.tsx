import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallFavoriteBroken = ({
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
      d="M8.96 15.91C1.181 8.132 4.546 5.916 4.825 5.57c2.788-2.788 3.22-1.52 5.415.675 2.276 2.275-2.109 3.341 1.466 6.915 3.576 3.575 4.638-.813 6.915 1.462 2.195 2.195 3.456 2.634.676 5.415-.315.252-2.155 3.032-8.257-2.19M17.91 9.113s-2.514-1.369-3.1-3.193c-.364-1.138.061-2.438 1.255-2.823a2.04 2.04 0 0 1 1.845.31 2.06 2.06 0 0 1 1.84-.31c1.195.385 1.623 1.685 1.26 2.823-.19.6-.597 1.156-1.056 1.628"
    />
  </Svg>
);
export default IconlystPhoneCallFavoriteBroken;
