import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownChartBold = ({
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
      d="M16.078 16.988a.75.75 0 0 1-1.052-.138l-2.343-3.048-2.604 2.05a.745.745 0 0 1-1.057-.13l-2.745-3.549a.751.751 0 0 1 1.187-.918l2.282 2.951 2.605-2.05a.75.75 0 0 1 1.06.131l2.805 3.65a.75.75 0 0 1-.138 1.051M14.97 4.786c0-.243.026-.48.068-.71.047-.26-.143-.514-.407-.514H7.98c-3.036 0-5.074 2.138-5.074 5.321v7.58c0 3.175 2.038 5.31 5.073 5.31h8.061c3.035 0 5.073-2.135 5.073-5.31V9.621c0-.28-.278-.472-.55-.406a4.3 4.3 0 0 1-1.032.13 4.566 4.566 0 0 1-4.562-4.56"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.531 2.227a2.565 2.565 0 0 0-2.562 2.56 2.556 2.556 0 0 0 2.562 2.559 2.556 2.556 0 0 0 2.562-2.56 2.565 2.565 0 0 0-2.562-2.56"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownChartBold;
