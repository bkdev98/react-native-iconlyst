import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlantsTwoTone = ({
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
      d="M7.627 13.233c-1.985-.005-3.371.409-3.552 1.194-.299 1.302 2.829 3.132 6.986 4.087s7.769.674 8.068-.629c.182-.79-.9-1.775-2.706-2.64"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.039 17.778a4.842 4.842 0 1 0 9.125-3.243 4.842 4.842 0 0 0-9.125 3.243"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M10.757 4.188v.011M8.012 7.596a2.418 2.418 0 1 1-4.835 0 2.418 2.418 0 0 1 4.835 0M20.853 7.906a3.71 3.71 0 1 1-7.026-2.39 3.71 3.71 0 0 1 7.026 2.39M17.47 5.246l-2.79-.95M19.841 9.476l-2.79-.949" />
    </G>
  </Svg>
);
export default IconlystPlantsTwoTone;
