import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoomOutline = ({
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
      d="M11.987 8.992a3.008 3.008 0 1 0 0 6.016 3.008 3.008 0 0 0 0-6.016M7.479 12a4.508 4.508 0 1 1 9.016 0 4.508 4.508 0 0 1-9.016 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .75.75v5.242a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M12 15.008a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-5.242a.75.75 0 0 1 .75-.75M21.75 12a.75.75 0 0 1-.75.75h-5.242a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75M8.992 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h5.242a.75.75 0 0 1 .75.75M16.875 3.558a.75.75 0 0 1 .275 1.024l-2.621 4.54a.75.75 0 1 1-1.3-.75l2.622-4.54a.75.75 0 0 1 1.024-.274M10.496 14.604a.75.75 0 0 1 .275 1.025l-2.621 4.54a.75.75 0 0 1-1.3-.75l2.622-4.54a.75.75 0 0 1 1.024-.275M20.443 16.875a.75.75 0 0 1-1.024.274l-4.54-2.62a.75.75 0 1 1 .75-1.3l4.54 2.622a.75.75 0 0 1 .274 1.024M9.395 10.496a.75.75 0 0 1-1.025.275L3.83 8.15a.75.75 0 1 1 .75-1.3l4.54 2.622a.75.75 0 0 1 .275 1.024M20.443 7.125a.75.75 0 0 1-.274 1.024l-4.54 2.622a.75.75 0 0 1-.75-1.3l4.54-2.62a.75.75 0 0 1 1.024.274M9.395 13.504a.75.75 0 0 1-.275 1.024L4.58 17.15a.75.75 0 0 1-.75-1.299l4.54-2.62a.75.75 0 0 1 1.025.274M16.875 20.443a.75.75 0 0 1-1.025-.275l-2.62-4.54a.75.75 0 0 1 1.298-.75l2.621 4.54a.75.75 0 0 1-.274 1.024M10.496 9.396a.75.75 0 0 1-1.025-.275l-2.62-4.54a.75.75 0 1 1 1.299-.75l2.62 4.54a.75.75 0 0 1-.274 1.025"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoomOutline;
