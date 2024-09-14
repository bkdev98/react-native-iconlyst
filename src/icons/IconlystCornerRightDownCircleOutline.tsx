import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCornerRightDownCircleOutline = ({
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
      d="M7.75 7.934a.75.75 0 0 1 .75-.75h1.732c2.219 0 4.018 1.799 4.018 4.018v3.054l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72v-3.054a2.52 2.52 0 0 0-2.518-2.518H8.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 1 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25c5.384 0 9.75 4.365 9.75 9.75s-4.366 9.75-9.75 9.75A9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCornerRightDownCircleOutline;
