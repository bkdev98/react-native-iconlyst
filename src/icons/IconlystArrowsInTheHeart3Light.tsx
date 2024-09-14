import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsInTheHeart3Light = ({
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
      d="M15.208 18.962c-1.007.688-1.716 1.077-1.716 1.077s-6.61-3.6-8.153-8.397C4.38 8.648 5.5 5.228 8.642 4.215a5.37 5.37 0 0 1 4.85.817 5.4 5.4 0 0 1 4.842-.817c2.732.88 3.941 3.583 3.58 6.242M18.86 17.249l2.957-.2-.677-2.881M6.361 5.71 3.977 3.96M21.817 17.047l-6.674-4.89"
    />
  </Svg>
);
export default IconlystArrowsInTheHeart3Light;
