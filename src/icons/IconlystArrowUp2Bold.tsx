import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUp2Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M13.131 7.37c.058.056.306.27.51.468 1.283 1.165 3.383 4.204 4.024 5.795.103.242.321.853.335 1.179q0 .469-.218.895c-.204.355-.525.64-.904.795-.263.1-1.05.256-1.064.256-.861.156-2.26.242-3.806.242-1.473 0-2.815-.086-3.689-.213-.014-.015-.992-.17-1.327-.341A1.79 1.79 0 0 1 6 14.868v-.056c.015-.426.395-1.321.409-1.321.642-1.505 2.639-4.474 3.966-5.668 0 0 .341-.336.554-.482A1.8 1.8 0 0 1 11.993 7c.423 0 .817.128 1.138.37"
    />
  </Svg>
);
export default IconlystArrowUp2Bold;
