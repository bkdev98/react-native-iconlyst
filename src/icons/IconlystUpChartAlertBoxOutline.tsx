import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpChartAlertBoxOutline = ({
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
      d="M4.207 4.75c.947-1.02 2.298-1.592 3.896-1.592h6.811a.75.75 0 0 1 0 1.5H8.103c-1.226 0-2.162.429-2.796 1.113-.64.69-1.027 1.701-1.027 2.959v7.575c0 1.261.382 2.27 1.015 2.956.628.679 1.562 1.107 2.808 1.107h8.061c1.226 0 2.162-.427 2.795-1.108.64-.688 1.028-1.698 1.028-2.955V9.708a.75.75 0 0 1 1.5 0v6.597c0 1.565-.487 2.963-1.429 3.976-.947 1.02-2.298 1.587-3.894 1.587H8.103c-1.612 0-2.964-.566-3.91-1.589-.937-1.015-1.413-2.413-1.413-3.974V8.73c0-1.565.486-2.964 1.427-3.98"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.925 9.569a.75.75 0 0 1 .133 1.052l-2.745 3.543a.75.75 0 0 1-1.056.13l-2.604-2.044-2.344 3.045a.75.75 0 0 1-1.188-.915l2.805-3.645a.75.75 0 0 1 1.057-.133l2.607 2.047 2.283-2.947a.75.75 0 0 1 1.052-.133M19.669 3.869a1.052 1.052 0 1 0 0 2.103 1.052 1.052 0 0 0 0-2.103M17.117 4.92a2.552 2.552 0 1 1 5.104 0 2.552 2.552 0 0 1-5.104 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpChartAlertBoxOutline;
