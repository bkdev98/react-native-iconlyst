import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLyricsAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.987 3H7.782C4.842 3 3 5.081 3 8.026v7.948C3 18.919 4.834 21 7.782 21h8.434C19.165 21 21 18.919 21 15.974v-5.948M7.35 16.378h1.31M16.649 16.377h-5.29M16.648 12.654h-2.346M11.593 12.654H7.408M18.715 7.577l.089-.24a3.31 3.31 0 0 1 1.956-1.96L21 5.29l-.24-.09a3.31 3.31 0 0 1-1.956-1.958l-.09-.24-.088.24A3.31 3.31 0 0 1 16.67 5.2l-.24.089.24.089a3.31 3.31 0 0 1 1.956 1.959z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.37 8.674a2.28 2.28 0 0 1 1.513-1.516 2.28 2.28 0 0 1-1.513-1.515 2.28 2.28 0 0 1-1.513 1.515c.725.221 1.293.79 1.513 1.516"
    />
  </Svg>
);
export default IconlystLyricsAiLight;
