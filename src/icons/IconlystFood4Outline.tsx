import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood4Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.042 15.27a.75.75 0 0 1-.786-.71c-.219-4.377 2.81-8.134 6.927-9.002A1.916 1.916 0 0 1 12 3.04a1.916 1.916 0 0 1 1.816 2.518c4.118.868 7.147 4.624 6.93 9.002a.75.75 0 0 1-.787.71.746.746 0 0 1-.712-.78A7.256 7.256 0 0 0 12 6.87a7.254 7.254 0 0 0-7.246 7.62.746.746 0 0 1-.712.78m8.37-10.31c0-.23-.184-.42-.412-.42a.415.415 0 0 0 0 .83c.228 0 .412-.19.412-.41M20.081 16.42a1 1 0 0 1 .108 0H21c.414 0 .75.34.75.75 0 .42-.336.75-.75.75h-.314l-.107.35a3.08 3.08 0 0 1-2.946 2.19H6.368a3.08 3.08 0 0 1-2.946-2.19l-.107-.35H3a.746.746 0 0 1-.75-.75c0-.41.336-.75.75-.75h.813a1 1 0 0 1 .107 0zm-15.197 1.5c.226.617.818 1.04 1.484 1.04h11.265c.666 0 1.258-.423 1.484-1.04z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFood4Outline;
