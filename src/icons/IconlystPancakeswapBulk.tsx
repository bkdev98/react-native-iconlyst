import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPancakeswapBulk = ({
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
      d="M18.493 9.701c.212-.853.742-3.049.878-4.168a2.75 2.75 0 0 0-.617-2.022 2.74 2.74 0 0 0-1.865-.994 2.765 2.765 0 0 0-3.013 2.48l-.335 3.47a6.8 6.8 0 0 0-2.08 0l-.335-3.47c-.148-1.515-1.5-2.61-3.015-2.48a2.73 2.73 0 0 0-1.864.995c-.47.57-.687 1.288-.618 1.95-.02.413.557 2.882.88 4.237-1.468.99-3.025 2.516-3.025 5.436 0 2.558 2.289 4.99 5.573 5.913q1.715.457 3.443.457c1.15 0 2.305-.153 3.45-.459 3.279-.92 5.567-3.352 5.567-5.91 0-2.919-1.556-4.446-3.024-5.435"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.563 15.625a.75.75 0 0 0 .75-.75v-.73a.75.75 0 1 0-1.5 0v.73c0 .414.336.75.75.75M9.438 15.625a.75.75 0 0 0 .75-.75v-.73a.75.75 0 1 0-1.5 0v.73c0 .414.336.75.75.75"
    />
  </Svg>
);
export default IconlystPancakeswapBulk;
