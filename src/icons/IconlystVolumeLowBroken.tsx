import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeLowBroken = ({
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
      d="M3.434 8.911c.125-.559.334-1.032.683-1.324.878-.73 1.4-.542 2.996-.66.428 0 .93-.121 1.293-.349l3.127-1.955c1.877-1.173 4.169.235 4.302 2.422q.36 4.955 0 9.91c-.115 2.183-2.425 3.594-4.302 2.422l-3.127-1.955c-.364-.228-.859-.349-1.287-.349-1.604-.12-2.118.069-3.002-.66-.828-.694-.869-2.413-.867-3.864M20.23 8.174a7.68 7.68 0 0 1 0 7.65"
    />
  </Svg>
);
export default IconlystVolumeLowBroken;
