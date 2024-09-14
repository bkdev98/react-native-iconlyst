import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartDownwardOutline = ({
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
      d="M3.38 9.38a2.477 2.477 0 0 1 4.954 0v10.011a2.476 2.476 0 1 1-4.954 0zm2.477-.977a.977.977 0 0 0-.977.977v10.011a.977.977 0 1 0 1.954 0V9.381a.977.977 0 0 0-.977-.978m4.166 5.188a2.477 2.477 0 0 1 4.954 0v5.8a2.476 2.476 0 1 1-4.954 0zm2.477-.977a.977.977 0 0 0-.977.976v5.801a.977.977 0 1 0 1.954 0v-5.8a.977.977 0 0 0-.977-.977m4.166 3.467a2.478 2.478 0 1 1 4.954 0v3.31a2.476 2.476 0 1 1-4.954 0zm2.477-.978a.98.98 0 0 0-.977.978v3.31a.977.977 0 1 0 1.954 0v-3.31a.977.977 0 0 0-.977-.978M5.296 2.644a.75.75 0 0 1 1.055-.107l6.455 5.271 1.703-1.794a.75.75 0 0 1 .98-.094l5.817 4.158a.75.75 0 0 1-.872 1.22L15.148 7.52l-1.733 1.826a.75.75 0 0 1-1.019.064L5.403 3.7a.75.75 0 0 1-.107-1.056"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartDownwardOutline;
