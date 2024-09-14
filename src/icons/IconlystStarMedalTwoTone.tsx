import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarMedalTwoTone = ({
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
      d="M12.114 7.679A6.5 6.5 0 0 0 16.435 12a6.5 6.5 0 0 0-4.321 4.322A6.5 6.5 0 0 0 7.793 12a6.5 6.5 0 0 0 4.32-4.321"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.775 9.66a3.52 3.52 0 0 0 2.34 2.34 3.52 3.52 0 0 0-2.34 2.34 3.52 3.52 0 0 0-2.34-2.34 3.52 3.52 0 0 0 2.34-2.34M12.115 16.321a3.52 3.52 0 0 0 2.339 2.34A3.52 3.52 0 0 0 12.114 21a3.52 3.52 0 0 0-2.339-2.34 3.52 3.52 0 0 0 2.34-2.339M12.115 3a3.52 3.52 0 0 0 2.339 2.34 3.52 3.52 0 0 0-2.34 2.339 3.52 3.52 0 0 0-2.339-2.34A3.52 3.52 0 0 0 12.115 3M5.454 9.66A3.52 3.52 0 0 0 7.793 12a3.52 3.52 0 0 0-2.34 2.34A3.52 3.52 0 0 0 3.115 12a3.52 3.52 0 0 0 2.34-2.34"
    />
  </Svg>
);
export default IconlystStarMedalTwoTone;
