import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceIncreaseBroken = ({
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
      d="M12.215 13.623v4.699m0 0 2.674-2.605m-2.674 2.605-2.672-2.605M12.215 10.231V5.676m0 0L9.543 8.28m2.672-2.604L14.89 8.28M12.25 21H6.565m11.369 0h-2.842M17.934 3h-5.685M9.407 3H6.565"
    />
  </Svg>
);
export default IconlystSpaceIncreaseBroken;
