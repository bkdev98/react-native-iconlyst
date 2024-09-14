import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondStarOutline = ({
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
      d="M12.25 2.25a.75.75 0 0 1 .713.519 13.25 13.25 0 0 0 8.518 8.518.75.75 0 0 1 0 1.426 13.25 13.25 0 0 0-8.518 8.518.75.75 0 0 1-1.426 0 13.25 13.25 0 0 0-8.518-8.518.75.75 0 0 1 0-1.426 13.25 13.25 0 0 0 8.518-8.518.75.75 0 0 1 .713-.519M5.273 12a14.76 14.76 0 0 1 6.977 6.977A14.76 14.76 0 0 1 19.227 12a14.76 14.76 0 0 1-6.977-6.977A14.76 14.76 0 0 1 5.273 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiamondStarOutline;
