import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtractDashBulk = ({
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
      d="M21.5 7.615a.75.75 0 0 0-.75.75v2.086a.75.75 0 0 0 1.5 0V8.365a.75.75 0 0 0-.75-.75M14.017 3.748h2.087a.75.75 0 0 0 0-1.5h-2.087a.75.75 0 0 0 0 1.5M18.607 3.75c1.2.035 2.004.783 2.148 2.002a.75.75 0 1 0 1.49-.176c-.232-1.963-1.642-3.269-3.594-3.326h-.023a.751.751 0 0 0-.021 1.5M18.65 16.64c1.953-.056 3.363-1.362 3.595-3.326a.748.748 0 0 0-.746-.838.75.75 0 0 0-.744.663c-.144 1.218-.947 1.967-2.148 2.003a.75.75 0 0 0-.727.77c.01.415.34.755.77.729M8.533 6.407a.746.746 0 0 0 .833-.657c.144-1.218.947-1.967 2.148-2.003a.75.75 0 0 0-.022-1.5l-.022.001c-1.952.058-3.362 1.364-3.594 3.326a.75.75 0 0 0 .657.833"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.87 7.373v4.596c0 2.83 1.732 4.651 4.396 4.651h4.864v.783c0 2.56-1.72 4.35-4.17 4.35H6.92c-2.45 0-4.17-1.79-4.17-4.35v-5.69c0-2.56 1.72-4.34 4.17-4.34z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.13 16.62v-4.907c0-2.56-1.72-4.34-4.17-4.34H7.87v4.596c0 2.83 1.732 4.651 4.396 4.651z"
    />
  </Svg>
);
export default IconlystSubtractDashBulk;
