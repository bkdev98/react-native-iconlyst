import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpChartCircleOutline = ({
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
      d="M17.335 9.188a.75.75 0 0 1 .133 1.052l-2.745 3.543a.75.75 0 0 1-1.056.131l-2.604-2.045-2.344 3.045A.75.75 0 1 1 7.53 14l2.806-3.645a.75.75 0 0 1 1.057-.132L14 12.268l2.282-2.947a.75.75 0 0 1 1.053-.133"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 3.869a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5m-9.75 8.25c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75a9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpChartCircleOutline;
