import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapRotate2Bold = ({
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
      d="M21.462 11.625c-.95-2.568-4.356-2.446-6.71-2.671l-.066-4.348a1.68 1.68 0 0 0-3.361.025v9.913a.644.644 0 0 1-.967.558l-1.232-.712a1.962 1.962 0 0 0-2.896 1.273 1.87 1.87 0 0 0 .676 1.903c1.019.776 2.722 1.991 4.347 2.767 2.543 1.215 6.625.895 8.548-1.028 1.677-1.677 2.62-5.096 1.661-7.68M9.06 7.892A3.45 3.45 0 0 0 7.54 5.03a.796.796 0 0 0-1.103.214.796.796 0 0 0 .213 1.103c.515.347.822.925.822 1.545a1.87 1.87 0 0 1-1.865 1.865A1.868 1.868 0 0 1 4.102 6.79c.107.313.393.54.742.54a.794.794 0 0 0 .794-.794V4.922a.794.794 0 0 0-.794-.793H3.262a.789.789 0 0 0-.28 1.53 3.44 3.44 0 0 0-.828 2.233 3.457 3.457 0 0 0 3.453 3.453 3.457 3.457 0 0 0 3.452-3.453"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapRotate2Bold;
