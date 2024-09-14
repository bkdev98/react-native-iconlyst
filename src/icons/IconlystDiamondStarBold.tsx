import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondStarBold = ({
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
      fillRule="evenodd"
      d="M21.23 12.157a13.27 13.27 0 0 1-8.517-8.518.75.75 0 0 0-1.427 0 13.27 13.27 0 0 1-8.517 8.518.75.75 0 0 0 0 1.428 13.27 13.27 0 0 1 8.517 8.517.75.75 0 0 0 1.427 0 13.27 13.27 0 0 1 8.517-8.517.752.752 0 0 0 0-1.428"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiamondStarBold;
