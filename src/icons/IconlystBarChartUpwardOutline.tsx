import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartUpwardOutline = ({
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
      d="M19.143 8.403a.977.977 0 0 0-.977.977v10.011a.976.976 0 1 0 1.954 0V9.381a.977.977 0 0 0-.977-.978m-2.477.977a2.477 2.477 0 1 1 4.954 0v10.011a2.477 2.477 0 1 1-4.954 0zM12.5 12.613a.977.977 0 0 0-.977.978v5.8a.976.976 0 1 0 1.954 0v-5.8a.977.977 0 0 0-.977-.977m-2.477.978a2.477 2.477 0 1 1 4.954 0v5.8a2.477 2.477 0 1 1-4.954 0zm-4.166 1.512a.98.98 0 0 0-.977.978v3.31a.977.977 0 1 0 1.954 0v-3.31a.977.977 0 0 0-.977-.978m-2.477.978a2.478 2.478 0 1 1 4.954 0v3.31a2.476 2.476 0 1 1-4.954 0zM19.705 2.644a.75.75 0 0 1-.106 1.055L12.605 9.41a.75.75 0 0 1-1.018-.064L9.853 7.52l-5.286 3.778a.75.75 0 0 1-.872-1.22L9.512 5.92a.75.75 0 0 1 .98.094l1.703 1.794 6.455-5.27a.75.75 0 0 1 1.055.106"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartUpwardOutline;
