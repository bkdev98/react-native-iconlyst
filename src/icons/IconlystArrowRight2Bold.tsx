import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRight2Bold = ({
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
      d="M16.63 13.131c-.056.058-.27.306-.468.51-1.165 1.283-4.204 3.383-5.795 4.024-.242.103-.853.321-1.179.335q-.469 0-.895-.218a1.87 1.87 0 0 1-.795-.904c-.1-.263-.256-1.05-.256-1.064-.156-.861-.242-2.26-.242-3.806 0-1.473.086-2.815.213-3.689.015-.014.17-.992.341-1.327A1.79 1.79 0 0 1 9.132 6h.056c.426.015 1.321.395 1.321.409 1.505.642 4.474 2.639 5.668 3.966 0 0 .336.341.482.554.228.306.341.685.341 1.064 0 .423-.128.817-.37 1.138"
    />
  </Svg>
);
export default IconlystArrowRight2Bold;
