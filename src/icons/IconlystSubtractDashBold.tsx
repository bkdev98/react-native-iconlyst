import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtractDashBold = ({
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
      fillRule="evenodd"
      d="M21 8.123a.75.75 0 0 0-.75.75v2.087a.75.75 0 0 0 1.5 0V8.873a.75.75 0 0 0-.75-.75M13.517 4.257h2.087a.75.75 0 0 0 0-1.5h-2.087a.75.75 0 0 0 0 1.5M18.107 4.258c1.2.036 2.004.784 2.148 2.003a.75.75 0 1 0 1.49-.176c-.232-1.963-1.642-3.269-3.594-3.326h-.023a.751.751 0 0 0-.021 1.5M21.088 12.99a.75.75 0 0 0-.833.657c-.144 1.219-.947 1.969-2.148 2.003a.75.75 0 0 0-.727.772c.01.413.34.755.77.727 1.953-.056 3.363-1.363 3.595-3.326a.75.75 0 0 0-.657-.832M8.033 6.916a.746.746 0 0 0 .833-.657c.144-1.218.947-1.967 2.148-2.003a.75.75 0 0 0-.022-1.5h-.022c-1.952.059-3.362 1.365-3.594 3.327a.75.75 0 0 0 .657.833M15.13 15.582a.3.3 0 0 1-.3.3h-3.29c-1.77 0-2.92-1.21-2.92-3.09v-3.11a.3.3 0 0 1 .3-.3h3.54c1.64 0 2.67 1.09 2.67 2.84zm-2.67-7.7H6.42c-2.45 0-4.17 1.78-4.17 4.34v5.69c0 2.56 1.72 4.35 4.17 4.35h6.04c2.45 0 4.17-1.79 4.17-4.35v-5.69c0-2.56-1.72-4.34-4.17-4.34"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSubtractDashBold;
