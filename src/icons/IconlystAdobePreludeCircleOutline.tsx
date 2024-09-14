import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobePreludeCircleOutline = ({
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
      d="M8.554 9.524a4.8 4.8 0 0 1 1.072-.01c.404.048.716.16.917.33.169.143.33.385.33.885s-.161.752-.337.904c-.205.178-.521.297-.926.354-.365.05-.745.04-1.056.013zm0 3.98c.361.027.807.032 1.263-.032.55-.076 1.19-.262 1.7-.705.54-.467.856-1.15.856-2.038s-.316-1.57-.862-2.03c-.516-.437-1.159-.61-1.71-.675a6.4 6.4 0 0 0-1.493.02 7 7 0 0 0-.623.104l-.04.01-.013.002-.004.001h-.002l.178.73-.179-.729a.75.75 0 0 0-.571.728v6.366a.75.75 0 0 0 1.5 0zM14.875 8.367a.75.75 0 0 1 .75.75v5.385h.572a.75.75 0 1 1 0 1.5h-.75c-.73 0-1.322-.591-1.322-1.32V9.116a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobePreludeCircleOutline;
