import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFeedlyOutline = ({
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
      d="M12.78 8.372a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0M12.78 12.372a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0M13.28 15.872a.75.75 0 0 1 0 1.06l-.5.5a.75.75 0 1 1-1.06-1.06l.5-.5a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.098 2.905c1.23.044 2.411.615 3.386 1.59l4.672 4.672c.976.975 1.546 2.156 1.59 3.387.044 1.238-.45 2.443-1.447 3.441l-.004.004-4.374 4.31a2.75 2.75 0 0 1-1.93.792H9.88a2.75 2.75 0 0 1-1.959-.82l-4.08-4.144-.002-.002c-.975-.975-1.543-2.157-1.586-3.386-.044-1.238.449-2.443 1.444-3.438l4.959-4.959c.997-.998 2.203-1.491 3.441-1.447m-.054 1.5c-.778-.029-1.59.272-2.326 1.008L4.759 10.37c-.733.733-1.034 1.545-1.006 2.325.027.788.394 1.625 1.15 2.38l.004.005 4.084 4.147c.235.239.556.373.89.373h4.11c.328 0 .643-.13.877-.36l4.37-4.307.002-.002c.735-.735 1.035-1.547 1.007-2.325-.028-.787-.395-1.623-1.151-2.38l-4.672-4.671c-.756-.757-1.592-1.124-2.38-1.152"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFeedlyOutline;
