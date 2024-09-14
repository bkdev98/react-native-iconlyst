import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiagonalMouthTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.273 14.656h2.658M9.27 8.904v-.052M9.224 8.7a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M15.73 8.904v-.052m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
  </Svg>
);
export default IconlystDiagonalMouthTwoTone;
