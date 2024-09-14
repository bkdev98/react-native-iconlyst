import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCampTentOutline = ({
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
      d="M11.672 6.51a.75.75 0 0 1 1.059 0l5.543 5.52a.75.75 0 0 1 .178.284l2.92 8.326a.75.75 0 0 1-1.415.497l-2.864-8.165L12.202 8.1 7.31 12.972l-2.863 8.165a.75.75 0 0 1-1.415-.497l2.92-8.327a.75.75 0 0 1 .178-.283z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 20.889a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.235 11.313a.75.75 0 0 1 .694.802l-.628 8.827a.75.75 0 1 1-1.496-.107l.628-8.827a.75.75 0 0 1 .802-.695M17.183 11.313a.75.75 0 0 1 .802.695l.628 8.827a.75.75 0 0 1-1.496.107l-.629-8.827a.75.75 0 0 1 .695-.802"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.359 11.204a.75.75 0 0 1 .736.605c.435 2.202 1.42 4.351 2.314 5.968.445.804.862 1.467 1.167 1.928a22 22 0 0 0 .458.666l.024.033.006.008a.75.75 0 0 1-1.203.897l.602-.448-.602.448v-.002l-.003-.003-.008-.011-.03-.041-.109-.152a23 23 0 0 1-.387-.568 30 30 0 0 1-1.227-2.03 26.4 26.4 0 0 1-1.738-3.79 26.4 26.4 0 0 1-1.737 3.79 30 30 0 0 1-1.228 2.03 23 23 0 0 1-.495.72l-.03.04-.008.011-.002.004c-.001.001-.001.002-.603-.446l.602.447a.75.75 0 0 1-1.204-.895l.001-.001.006-.008.024-.033.097-.136c.085-.12.209-.3.361-.53a29 29 0 0 0 1.166-1.928c.894-1.617 1.88-3.766 2.314-5.968a.75.75 0 0 1 .736-.605M11.67 2.581a.75.75 0 0 1 .531-.22h3.24a.75.75 0 0 1 .75.75v2.434a.75.75 0 0 1-.75.75h-2.49v.748a.75.75 0 0 1-1.5 0V3.11a.75.75 0 0 1 .22-.53m1.281 2.214h1.74V3.86h-1.74z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCampTentOutline;
