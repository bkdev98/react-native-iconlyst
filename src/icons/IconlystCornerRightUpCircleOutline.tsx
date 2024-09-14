import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCornerRightUpCircleOutline = ({
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
      d="M12.97 7.403a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.061l-.72-.72v3.054a4.02 4.02 0 0 1-4.018 4.018H8.5a.75.75 0 0 1 0-1.5h1.732a2.52 2.52 0 0 0 2.518-2.518V9.745l-.72.72a.75.75 0 1 1-1.06-1.061z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25c5.384 0 9.75 4.365 9.75 9.75s-4.366 9.75-9.75 9.75A9.75 9.75 0 0 1 2.25 12M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 1 0 12 3.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCornerRightUpCircleOutline;
