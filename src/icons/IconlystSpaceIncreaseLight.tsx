import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceIncreaseLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.465 14.39v4.7m0 0 2.674-2.605m-2.674 2.604-2.672-2.604M12.465 10.997V6.44m0 0L9.793 9.046m2.672-2.605 2.674 2.605M18.184 21.766H6.815M18.184 3.766H6.815"
    />
  </Svg>
);
export default IconlystSpaceIncreaseLight;
