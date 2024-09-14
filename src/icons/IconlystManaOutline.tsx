import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystManaOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.385 4.365-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.3 17.4a.75.75 0 0 1 .75-.75h14.4a.75.75 0 0 1 0 1.5H5.05a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.324 11.7a.75.75 0 0 1 .576.27l4.125 4.95a.75.75 0 1 1-1.152.96l-3.549-4.26-3.549 4.26a.75.75 0 1 1-1.152-.96l4.125-4.95a.75.75 0 0 1 .576-.27"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.324 11.7a.75.75 0 0 1 .75.75v4.95a.75.75 0 0 1-1.5 0v-4.95a.75.75 0 0 1 .75-.75M8.901 8.348a.75.75 0 0 1 .604.305l4.324 5.872a.75.75 0 0 1-1.208.89L8.9 10.362l-4.256 5.773a.75.75 0 0 1-1.208-.89l4.86-6.592a.75.75 0 0 1 .604-.305"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.9 8.348a.75.75 0 0 1 .75.75V17a.75.75 0 0 1-1.5 0V9.098a.75.75 0 0 1 .75-.75M9.25 5.75a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5M7.5 6A1.75 1.75 0 1 1 11 6a1.75 1.75 0 0 1-3.5 0M15.324 6.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12.574 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystManaOutline;
