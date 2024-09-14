import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpSquareOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.335 22C19.724 22 22 19.622 22 16.084V7.916C22 4.378 19.724 2 16.335 2H7.666C4.277 2 2 4.378 2 7.916v8.168C2 19.622 4.277 22 7.666 22zm0-1.5H7.666c-2.53 0-4.166-1.733-4.166-4.416V7.916C3.5 5.233 5.136 3.5 7.666 3.5h8.669c2.53 0 4.165 1.733 4.165 4.416v8.168c0 2.683-1.635 4.416-4.165 4.416M12 16.836a.75.75 0 0 0 .75-.75V9.73l2.467 2.477a.749.749 0 1 0 1.062-1.059l-3.748-3.764a1 1 0 0 0-.077-.066l.077.066a.7.7 0 0 0-.13-.104l-.033-.02a1 1 0 0 0-.067-.034l-.019-.007a1 1 0 0 0-.072-.026l-.046-.01-.057-.012-.047-.005-.06-.003-.059.005-.043.003h-.006L12 7.164a.8.8 0 0 0-.164.018l-.046.013a1 1 0 0 0-.073.024l-.017.009a1 1 0 0 0-.069.033l-.032.02a.88.88 0 0 0-.137.111l-3.741 3.757a.75.75 0 0 0 1.062 1.06L11.25 9.73v6.356c0 .414.336.75.75.75"
    />
  </Svg>
);
export default IconlystArrowUpSquareOutline;
