import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapRotate2Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M21.962 11.624c-.95-2.568-4.356-2.446-6.709-2.671l-.067-4.348a1.68 1.68 0 0 0-3.361.025v9.913a.644.644 0 0 1-.967.558l-1.232-.712a1.962 1.962 0 0 0-2.896 1.273 1.87 1.87 0 0 0 .676 1.903c1.019.776 2.722 1.991 4.347 2.767 2.543 1.215 6.626.895 8.548-1.028 1.677-1.677 2.62-5.096 1.661-7.68"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.56 7.893A3.45 3.45 0 0 0 8.04 5.03a.796.796 0 0 0-1.103.214.796.796 0 0 0 .214 1.102c.514.348.82.925.82 1.546a1.87 1.87 0 0 1-1.864 1.865A1.868 1.868 0 0 1 4.602 6.79c.107.312.394.54.742.54a.794.794 0 0 0 .794-.794V4.923a.794.794 0 0 0-.794-.794H3.762a.789.789 0 0 0-.28 1.53 3.44 3.44 0 0 0-.828 2.234 3.457 3.457 0 0 0 3.453 3.452A3.457 3.457 0 0 0 9.56 7.893"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapRotate2Bulk;
