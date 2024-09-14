import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagOutline = ({
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
      d="M4.348 7.703c.946-1.015 2.293-1.582 3.88-1.582h8.042c1.59 0 2.938.567 3.883 1.582.94 1.01 1.428 2.402 1.428 3.96v4.543c0 1.56-.488 2.951-1.428 3.96-.946 1.016-2.293 1.582-3.884 1.582H8.228c-1.591 0-2.938-.566-3.883-1.581-.94-1.01-1.427-2.402-1.427-3.961v-4.542c0-1.56.49-2.952 1.43-3.961m1.097 1.023c-.638.685-1.027 1.69-1.027 2.938v4.542c0 1.25.387 2.254 1.025 2.939.631.678 1.564 1.104 2.785 1.104h8.04c1.222 0 2.155-.426 2.787-1.105.638-.684 1.026-1.688 1.026-2.938v-4.542c0-1.25-.388-2.254-1.026-2.938-.632-.68-1.565-1.105-2.785-1.105H8.228c-1.216 0-2.15.425-2.783 1.105"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.453 10.4a.75.75 0 0 1 .661.828 3.886 3.886 0 0 1-3.862 3.45A3.93 3.93 0 0 1 9.5 13.545l-.011-.01a3.88 3.88 0 0 1-1.1-2.314.75.75 0 1 1 1.492-.153 2.38 2.38 0 0 0 .675 1.412 2.43 2.43 0 0 0 1.696.698 2.386 2.386 0 0 0 2.372-2.117.75.75 0 0 1 .829-.662M7.629 6.871a4.621 4.621 0 1 1 9.241 0 .75.75 0 1 1-1.5 0 3.121 3.121 0 0 0-6.241 0 .75.75 0 1 1-1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBagOutline;
