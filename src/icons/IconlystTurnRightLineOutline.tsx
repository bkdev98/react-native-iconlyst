import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnRightLineOutline = ({
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
      d="M12.817 5.04a.75.75 0 0 1 1.061 0l2.944 2.944a.75.75 0 0 1 0 1.06l-1.472 1.472c-.448.45-.897.898-1.472 1.473a.75.75 0 0 1-1.06-1.06l1.47-1.473h.002l.94-.942-1.344-1.344-1.069-1.07a.75.75 0 0 1 0-1.06M19 5.715a.75.75 0 0 1 .75.75v4.663a.75.75 0 0 1-1.5 0V6.465a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.25 13.474a5.71 5.71 0 0 1 5.708-5.708h6.335a.75.75 0 0 1 0 1.5H9.958a4.209 4.209 0 0 0 0 8.417H19a.75.75 0 0 1 0 1.5H9.958a5.71 5.71 0 0 1-5.708-5.71"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnRightLineOutline;
