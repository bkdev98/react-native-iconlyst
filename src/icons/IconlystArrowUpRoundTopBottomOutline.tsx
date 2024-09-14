import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpRoundTopBottomOutline = ({
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
      d="M12 3.75c-2.279 0-4.34.923-5.834 2.416a.75.75 0 1 1-1.06-1.06A9.72 9.72 0 0 1 12 2.25a9.72 9.72 0 0 1 6.894 2.856.75.75 0 0 1-1.06 1.06A8.22 8.22 0 0 0 12 3.75m-.53 3.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V16a.75.75 0 1 1-1.5 0V9.81l-1.72 1.72a.75.75 0 1 1-1.06-1.06zM5.104 17.834a.75.75 0 0 1 1.061 0A8.22 8.22 0 0 0 12 20.25c2.278 0 4.34-.923 5.833-2.416a.75.75 0 0 1 1.061 1.06A9.72 9.72 0 0 1 12 21.75a9.72 9.72 0 0 1-6.895-2.856.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUpRoundTopBottomOutline;
