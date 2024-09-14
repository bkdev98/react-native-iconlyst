import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPointingRightBold = ({
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
      d="M12.346 19.535c-2.726 1.01-6.335.015-8.106-1.755-2.257-2.258-2.43-8.57.14-10.637 1.63-1.31 3.61-2.33 5.383-2.973.951-.344 1.977.161 2.34 1.106.32.836.027 1.783-.71 2.29L9.55 8.837h10.176a1.773 1.773 0 0 1 .027 3.547l-4.59.07c-.237 2.484-.108 6.078-2.818 7.082"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPointingRightBold;
