import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForefingerOutline = ({
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
      d="M11.246 3.75a.92.92 0 0 0-.922.922v9.858a1.39 1.39 0 0 1-2.086 1.204l-1.225-.708a1.2 1.2 0 0 0-1.773.78c-.098.44.06.878.394 1.133 1.004.765 2.648 1.934 4.191 2.671 1.116.533 2.619.746 4.08.59 1.469-.156 2.775-.672 3.568-1.465.715-.715 1.31-1.847 1.61-3.122.298-1.273.283-2.61-.13-3.726-.35-.943-1.147-1.446-2.294-1.735-.865-.218-1.797-.285-2.726-.353q-.514-.036-1.02-.082a.75.75 0 0 1-.68-.735l-.066-4.325a.92.92 0 0 0-.921-.907m-2.422.922a2.422 2.422 0 0 1 4.843-.038l.056 3.644.204.015c.962.07 2.094.152 3.099.405 1.369.345 2.737 1.058 3.334 2.668.539 1.454.532 3.102.183 4.59-.348 1.483-1.055 2.886-2.01 3.84-1.117 1.118-2.797 1.717-4.469 1.896-1.679.179-3.47-.053-4.885-.728-1.688-.806-3.431-2.053-4.454-2.833a2.61 2.61 0 0 1-.949-2.65 2.7 2.7 0 0 1 3.987-1.754l1.061.613z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForefingerOutline;
