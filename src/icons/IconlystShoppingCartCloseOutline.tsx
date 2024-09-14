import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartCloseOutline = ({
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
      d="M10.076 16.852a3 3 0 0 1-2.909-2.3L4.647 3.898h-1.4a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .73.578l.625 2.647 13.52-.11a1.86 1.86 0 0 1 1.8 2.4l-1.833 6a3.22 3.22 0 0 1-2.8 2.277l-6.937.643a2 2 0 0 1-.276.02M6.952 7.118l1.674 7.088a1.5 1.5 0 0 0 1.586 1.14l6.934-.648a1.72 1.72 0 0 0 1.5-1.22l1.833-6.006a.36.36 0 0 0-.343-.466z"
    />
    <Path
      fill={props.color}
      d="M12.663 12.848a.75.75 0 0 1-.53-1.28l2.22-2.22a.75.75 0 0 1 1.06 1.06l-2.22 2.22a.75.75 0 0 1-.53.22"
    />
    <Path
      fill={props.color}
      d="M14.885 12.846a.75.75 0 0 1-.531-.22l-2.22-2.22a.75.75 0 0 1 1.06-1.06l2.22 2.22a.75.75 0 0 1-.53 1.28M9.114 21.599a1.231 1.231 0 1 0 0-2.462 1.231 1.231 0 0 0 0 2.462M18.325 21.599a1.231 1.231 0 1 0 0-2.462 1.231 1.231 0 0 0 0 2.462"
    />
  </Svg>
);
export default IconlystShoppingCartCloseOutline;
