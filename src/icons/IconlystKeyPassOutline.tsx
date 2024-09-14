import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyPassOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.854 4.433a3.854 3.854 0 0 0-1.548 7.386.75.75 0 0 1 .448.687v1.117l.859.86a.75.75 0 0 1 .068.982l-.703.933.653.7a.75.75 0 0 1 .037.98l-.698.875.885.885 1.139-1.14.001-6.212a.75.75 0 0 1 .442-.684 3.854 3.854 0 0 0-1.582-7.37M2.5 8.287a5.354 5.354 0 1 1 7.995 4.658l-.002 6.065a.75.75 0 0 1-.22.53l-1.888 1.889a.75.75 0 0 1-1.06 0l-1.89-1.89a.75.75 0 0 1-.055-.997l.713-.894-.64-.688a.75.75 0 0 1-.05-.962l.688-.915-.619-.62a.75.75 0 0 1-.22-.53l.002-.964A5.35 5.35 0 0 1 2.5 8.287"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.3 7.534a.63.63 0 0 0-.89 0 .75.75 0 0 1-1.06-1.06 2.13 2.13 0 0 1 3.01 0 .75.75 0 0 1-1.06 1.06M17.549 18.644a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0v-.008a.75.75 0 0 1 .75-.75M14.598 13.061c0-1.773 1.425-3.2 3.2-3.2 1.763 0 3.2 1.425 3.2 3.2 0 1.25-.716 2.133-1.648 2.648l-.168.095c-.27.153-.48.27-.652.425-.17.154-.236.286-.234.47a.75.75 0 0 1-1.5.02c-.01-.73.334-1.248.73-1.605.308-.277.69-.49.958-.639l.127-.071.01-.006c.574-.316.876-.754.876-1.337 0-.944-.762-1.7-1.7-1.7-.944 0-1.7.755-1.7 1.7a.75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKeyPassOutline;
