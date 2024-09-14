import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeXDCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.654 8.508a.75.75 0 0 1 1.04.21l1.395 2.102 1.395-2.102a.75.75 0 1 1 1.25.83l-1.745 2.627 1.745 2.628a.75.75 0 1 1-1.25.83L9.09 13.53l-1.396 2.102a.75.75 0 1 1-1.25-.83l1.746-2.628-1.745-2.627a.75.75 0 0 1 .21-1.04M16.931 8.031a.75.75 0 0 1 .75.75v6.2829999999999995a.75.75 0 0 1-.571.728l-.179-.728.178.728h-.002l-.004.002-.012.003-.04.009-.14.029c-.116.022-.28.05-.476.075a6.3 6.3 0 0 1-1.476.018c-.544-.064-1.181-.236-1.692-.667-.542-.458-.855-1.134-.855-2.013 0-.878.313-1.555.848-2.018.507-.438 1.14-.623 1.684-.698a6 6 0 0 1 1.237-.033V8.782a.75.75 0 0 1 .75-.75m-.75 3.973a4.7 4.7 0 0 0-1.031.014c-.398.055-.708.173-.908.346-.171.148-.33.393-.33.884 0 .492.158.728.323.867.196.165.502.277.9.324.362.042.738.025 1.046-.01z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeXDCircleOutline;
