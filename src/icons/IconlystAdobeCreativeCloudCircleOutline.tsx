import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeCreativeCloudCircleOutline = ({
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
      d="M13.48 9.328a2.7 2.7 0 0 0-.763.11.75.75 0 1 1-.428-1.437 4.17 4.17 0 1 1 1.19 8.169c-1.037 0-1.851-.39-2.525-.902-.518-.393-.988-.889-1.407-1.331l-.295-.309a.75.75 0 1 1 1.078-1.043l.348.364c.41.432.772.813 1.183 1.124.492.374.995.596 1.618.596a2.67 2.67 0 1 0 0-5.34"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.805 10.762a1.955 1.955 0 0 0-.294 3.887.75.75 0 1 1-.224 1.483 3.455 3.455 0 0 1 .518-6.87c1.633 0 2.548 1.114 3.24 1.957l.008.01a.75.75 0 1 1-1.16.952c-.741-.904-1.242-1.42-2.088-1.42"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeCreativeCloudCircleOutline;
