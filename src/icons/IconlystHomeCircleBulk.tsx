import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeCircleBulk = ({
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
      d="m20.489 7.625-5.573-4.539a3.72 3.72 0 0 0-4.692-.001l-5.571 4.54a3.68 3.68 0 0 0-1.37 2.872v7.18a4.075 4.075 0 0 0 4.071 4.07h10.431a4.075 4.075 0 0 0 4.072-4.07v-7.18a3.68 3.68 0 0 0-1.368-2.872"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.728 13.568a3.846 3.846 0 0 0 3.842 3.84 3.845 3.845 0 0 0 3.843-3.84 3.845 3.845 0 0 0-3.843-3.84 3.845 3.845 0 0 0-3.842 3.84m1.5 0c0-1.29 1.05-2.34 2.342-2.34a2.343 2.343 0 0 1 2.342 2.34 2.343 2.343 0 0 1-4.685 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeCircleBulk;
