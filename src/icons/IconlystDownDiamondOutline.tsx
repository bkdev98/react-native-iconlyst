import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownDiamondOutline = ({
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
      d="M12.046 3.752c-.779-.028-1.592.273-2.328 1.009L4.76 9.719c-.735.736-1.036 1.548-1.008 2.327.028.787.395 1.622 1.151 2.378l4.672 4.672c.756.756 1.593 1.123 2.381 1.15.78.028 1.593-.273 2.325-1.005l4.959-4.96c.735-.735 1.036-1.548 1.008-2.327-.028-.786-.395-1.623-1.151-2.379l-4.673-4.672c-.755-.756-1.591-1.123-2.378-1.151m.053-1.5c1.23.044 2.411.615 3.386 1.59l4.672 4.672c.976.976 1.546 2.157 1.59 3.387.044 1.239-.45 2.444-1.447 3.44l-4.958 4.96c-.995.996-2.2 1.488-3.439 1.445-1.23-.043-2.412-.613-3.388-1.589l-4.673-4.672c-.975-.975-1.545-2.156-1.59-3.386-.043-1.238.45-2.443 1.447-3.44L8.658 3.7c.997-.998 2.203-1.491 3.441-1.447"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.322 12.245a.75.75 0 0 1 .002 1.06L12.53 16.11a.75.75 0 0 1-1.063 0l-2.791-2.804a.75.75 0 1 1 1.063-1.059l2.26 2.27 2.263-2.27a.75.75 0 0 1 1.06-.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 7.669a.75.75 0 0 1 .75.75v7.161a.75.75 0 0 1-1.5 0V8.42a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownDiamondOutline;
