import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeightBold = ({
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
      d="M12.75 12.767v1.619a.75.75 0 0 1-1.5 0v-1.62a2.405 2.405 0 0 0-1.662 2.28A2.414 2.414 0 0 0 12 17.456a2.414 2.414 0 0 0 2.412-2.41c0-1.066-.7-1.962-1.662-2.28"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 18.956a3.915 3.915 0 0 1-3.912-3.91A3.915 3.915 0 0 1 12 11.136a3.915 3.915 0 0 1 3.912 3.91A3.915 3.915 0 0 1 12 18.956m1.786-12.5-.481 2.01h-2.61l-.481-2.01zm6.861 11.126-.765-5.98a3.6 3.6 0 0 0-3.559-3.136h-1.475l.48-2.01h.6a3.32 3.32 0 0 0 2.657-1.334l1.149-1.55a.75.75 0 1 0-1.205-.892l-1.148 1.548a1.81 1.81 0 0 1-1.453.728H8.07a1.81 1.81 0 0 1-1.451-.727L5.47 2.679a.75.75 0 1 0-1.205.893l1.149 1.55A3.32 3.32 0 0 0 8.07 6.457h.602l.48 2.01H7.677c-1.8 0-3.33 1.348-3.559 3.136l-.765 5.98a3.589 3.589 0 0 0 3.558 4.044h10.177a3.6 3.6 0 0 0 2.694-1.216c.68-.773.996-1.804.865-2.828"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWeightBold;
