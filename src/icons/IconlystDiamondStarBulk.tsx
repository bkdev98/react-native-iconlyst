import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondStarBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.017 21.9V2.4a.75.75 0 0 1 .696.518 13.27 13.27 0 0 0 8.517 8.518.752.752 0 0 1 0 1.428 13.27 13.27 0 0 0-8.517 8.517.75.75 0 0 1-.696.519"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.017 2.4H12a.75.75 0 0 0-.714.518 13.27 13.27 0 0 1-8.517 8.518.75.75 0 0 0 0 1.428 13.27 13.27 0 0 1 8.517 8.517.75.75 0 0 0 .73.52z"
    />
  </Svg>
);
export default IconlystDiamondStarBulk;
