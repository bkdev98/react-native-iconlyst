import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartMagnifierOutline = ({
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
      d="M12.133 3.87a7.668 7.668 0 1 0 0 15.335 7.668 7.668 0 0 0 0-15.336m-9.168 7.667a9.168 9.168 0 1 1 9.168 9.168 9.167 9.167 0 0 1-9.168-9.168"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.328 17.172a.75.75 0 0 1 1.061-.002l3.425 3.416a.75.75 0 1 1-1.06 1.062l-3.424-3.416a.75.75 0 0 1-.002-1.06M16.468 8.815a.75.75 0 0 1 .133 1.053l-2.498 3.223a.75.75 0 0 1-1.056.13l-2.315-1.817-2.09 2.717a.75.75 0 0 1-1.19-.915l2.553-3.317a.75.75 0 0 1 1.057-.133l2.318 1.82 2.035-2.627a.75.75 0 0 1 1.053-.134"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartMagnifierOutline;
