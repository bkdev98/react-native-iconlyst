import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftRoundLeftRightOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.833 5.106a.75.75 0 0 1 1.06 0A9.72 9.72 0 0 1 21.75 12a9.72 9.72 0 0 1-2.856 6.894.75.75 0 0 1-1.06-1.06A8.22 8.22 0 0 0 20.25 12c0-2.278-.923-4.34-2.417-5.834a.75.75 0 0 1 0-1.06m-11.667 0a.75.75 0 0 1 0 1.06A8.22 8.22 0 0 0 3.75 12c0 2.278.922 4.34 2.416 5.834a.75.75 0 0 1-1.06 1.06A9.72 9.72 0 0 1 2.25 12a9.72 9.72 0 0 1 2.855-6.894.75.75 0 0 1 1.06 0m6.303 3.364a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72h-6.19a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowLeftRoundLeftRightOutline;
