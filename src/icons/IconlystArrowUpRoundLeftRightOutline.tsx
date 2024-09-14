import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpRoundLeftRightOutline = ({
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
      d="M6.166 5.105a.75.75 0 0 1 0 1.061A8.22 8.22 0 0 0 3.75 12c0 2.278.923 4.34 2.416 5.833a.75.75 0 0 1-1.06 1.061A9.72 9.72 0 0 1 2.25 12a9.72 9.72 0 0 1 2.856-6.895.75.75 0 0 1 1.06 0m11.668 0a.75.75 0 0 1 1.06 0A9.72 9.72 0 0 1 21.75 12a9.72 9.72 0 0 1-2.856 6.894.75.75 0 1 1-1.06-1.06A8.22 8.22 0 0 0 20.25 12c0-2.279-.923-4.34-2.416-5.834a.75.75 0 0 1 0-1.06M11.47 7.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.061l-1.72-1.72V16a.75.75 0 0 1-1.5 0V9.81l-1.72 1.72a.75.75 0 0 1-1.06-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUpRoundLeftRightOutline;