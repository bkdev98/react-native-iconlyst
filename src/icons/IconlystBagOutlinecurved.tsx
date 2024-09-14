import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagOutlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M14.892 13.104h.046c.414 0 .727-.336.727-.75s-.359-.75-.773-.75a.75.75 0 0 0 0 1.5M9.107 13.104h-.046a.75.75 0 0 1 0-1.5c.414 0 .773.336.773.75s-.313.75-.727.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.955 7.268a5.03 5.03 0 0 1 1.467-3.019c.962-.954 2.26-1.435 3.592-1.469a5.076 5.076 0 0 1 5.032 4.488c1.785.426 3.033 1.141 3.82 2.168 1.06 1.385 1.248 3.269.576 5.762-1.5 5.563-2.458 8.022-9.442 8.022s-7.942-2.46-9.442-8.022c-.673-2.493-.484-4.377.576-5.762.787-1.027 2.035-1.742 3.821-2.168m8.52-.284a3.56 3.56 0 0 0-3.481-2.704c-.951 0-1.843.366-2.516 1.034a3.55 3.55 0 0 0-.952 1.67c1.021-.133 2.176-.198 3.474-.198s2.454.065 3.475.198M4.325 10.35C5.388 8.96 7.898 8.286 12 8.286c4.101 0 6.611.675 7.674 2.063.758.988.862 2.447.32 4.458C18.6 19.977 18.13 21.72 12 21.72c-6.13 0-6.6-1.742-7.994-6.913-.543-2.011-.439-3.47.32-4.458"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBagOutlinecurved;
