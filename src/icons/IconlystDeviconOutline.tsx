import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeviconOutline = ({
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
      d="M10.576 8.52a.75.75 0 0 1-.097 1.056l-2.205 1.838 2.363 1.477 1.667-4.17a.75.75 0 0 1 1.094-.357l4.002 2.501a.75.75 0 0 1 .082 1.212l-3 2.501a.75.75 0 0 1-.961-1.152l2.205-1.838-2.362-1.476-1.668 4.169a.75.75 0 0 1-1.094.357l-4.001-2.5a.75.75 0 0 1-.083-1.213l3.001-2.501a.75.75 0 0 1 1.056.096"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.27 5.63a2.696 2.696 0 0 1 2.677-3.017h14.107a2.696 2.696 0 0 1 2.68 2.986l-1.123 10.382a2.7 2.7 0 0 1-1.455 2.112l-5.881 3.001a2.7 2.7 0 0 1-2.456-.003L4.96 18.087a2.7 2.7 0 0 1-1.446-2.078zm2.677-1.517c-.718 0-1.273.627-1.188 1.339L5.003 15.83c.047.394.288.74.642.922l5.858 3.005c.342.175.748.176 1.09.001l5.881-3.001c.36-.184.602-.536.646-.937l1.123-10.382a1.196 1.196 0 0 0-1.19-1.325z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeviconOutline;
