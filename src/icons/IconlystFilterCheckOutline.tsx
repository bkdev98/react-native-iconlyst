import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterCheckOutline = ({
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
      d="M16.416 2.47a.75.75 0 0 1 0 1.06L11.99 7.957a.75.75 0 0 1-1.061 0L8.782 5.806a.75.75 0 1 1 1.062-1.06l1.617 1.62 3.894-3.896a.75.75 0 0 1 1.06 0M6.349 5.155c-1.021 0-1.849.828-1.849 1.849V8.99c0 .762.3 1.493.835 2.036l4.21 3.748.031.03c.42.42.657.99.657 1.584v3.122a.74.74 0 0 0 1.013.687m0 0 1.822-.726a.74.74 0 0 0 .466-.687v-1.925c0-.628.264-1.227.726-1.651l4.757-4.704.025-.024A2.9 2.9 0 0 0 20 8.324v-1.32c0-1.02-.827-1.849-1.848-1.849a.75.75 0 0 1 0-1.5c1.85 0 3.348 1.5 3.348 3.35v1.32a4.4 4.4 0 0 1-1.44 3.256l-4.756 4.703-.026.024a.74.74 0 0 0-.244.55v1.925c0 .918-.559 1.741-1.411 2.08l-1.821.727a2.24 2.24 0 0 1-3.07-2.081v-3.122a.74.74 0 0 0-.204-.51L4.321 12.13l-.032-.03A4.4 4.4 0 0 1 3 8.99V7.004c0-1.85 1.5-3.349 3.349-3.349a.75.75 0 1 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterCheckOutline;
