import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartPlusOutline = ({
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
      d="M10.08 16.852a3 3 0 0 1-2.91-2.3L4.65 3.898h-1.4a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .73.578l.625 2.647 13.521-.11a1.86 1.86 0 0 1 1.795 2.4l-1.833 6a3.22 3.22 0 0 1-2.793 2.277l-6.938.643a2 2 0 0 1-.277.02M6.956 7.118l1.674 7.088a1.5 1.5 0 0 0 1.586 1.14l6.934-.648a1.72 1.72 0 0 0 1.5-1.22l1.834-6.006a.36.36 0 0 0-.057-.32.43.43 0 0 0-.291-.146z"
    />
    <Path
      fill={props.color}
      d="M15.25 11.688h-3.14a.75.75 0 1 1 0-1.5h3.14a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M13.684 13.258a.75.75 0 0 1-.75-.75v-3.14a.75.75 0 1 1 1.5 0v3.14a.75.75 0 0 1-.75.75M9.132 21.6a1.232 1.232 0 1 0 0-2.463 1.232 1.232 0 0 0 0 2.464M18.342 21.599a1.231 1.231 0 1 1 0-2.463 1.231 1.231 0 0 1 0 2.463"
    />
  </Svg>
);
export default IconlystShoppingCartPlusOutline;
