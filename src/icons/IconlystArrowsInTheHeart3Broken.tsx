import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsInTheHeart3Broken = ({
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
      d="M4.839 11.642C3.88 8.648 5 5.228 8.142 4.215a5.37 5.37 0 0 1 4.85.817 5.4 5.4 0 0 1 4.842-.817c2.732.88 3.941 3.583 3.58 6.242M14.708 18.962c-1.008.688-1.716 1.077-1.716 1.077s-4.28-2.33-6.756-5.74M18.36 17.249l2.957-.2-.677-2.881M5.861 5.71 3.477 3.96M21.317 17.047l-6.674-4.89"
    />
  </Svg>
);
export default IconlystArrowsInTheHeart3Broken;
