import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowBagBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M17.773 11.673c-.549-.91-1.129-1.815-1.705-2.716l-.324-.506 1.708-3.789a.503.503 0 0 0-.523-.7c-.425.056-1.597.207-1.914.225-1.389.07-2.671-.34-3.75-.76-1.482-.577-2.895-.358-4.2.653-.396.306-.553.444-.553.444a.5.5 0 0 0-.109.618l1.842 3.34-.357.553c-.563.874-1.128 1.751-1.661 2.638-1.178 1.96-2.352 4.253-1.385 6.67 1.334 3.325 5.445 3.746 7.165 3.773 1.706-.027 5.817-.448 7.15-3.774.969-2.414-.207-4.708-1.384-6.669"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.655 8.342a.744.744 0 0 0-.899-.562 21.1 21.1 0 0 1-9.512 0 .743.743 0 0 0-.899.562.75.75 0 0 0 .563.898q2.537.584 5.093.583c1.7 0 3.402-.194 5.092-.583a.747.747 0 0 0 .561-.898M14.69 13.744a.75.75 0 0 0-1.024-.274l-.916.528V12.94a.75.75 0 0 0-1.5 0v1.058l-.916-.528a.75.75 0 1 0-.75 1.298l.915.529-.915.528a.75.75 0 1 0 .75 1.299l.916-.53v1.059a.75.75 0 0 0 1.5 0v-1.058l.916.529a.747.747 0 0 0 1.024-.275.75.75 0 0 0-.274-1.024l-.916-.528.916-.53a.75.75 0 0 0 .274-1.023"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSnowBagBulk;
