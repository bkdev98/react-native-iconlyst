import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoveUpBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.425 3.5h-2.6c-1.213 0-2.2.987-2.2 2.2v2.6c0 1.213.987 2.2 2.2 2.2h2.6c1.213 0 2.2-.987 2.2-2.2V5.7c0-1.213-.987-2.2-2.2-2.2M18.425 13.5h-2.6c-1.213 0-2.2.987-2.2 2.2v2.6c0 1.213.987 2.2 2.2 2.2h2.6c1.213 0 2.2-.987 2.2-2.2v-2.6c0-1.213-.987-2.2-2.2-2.2M11.424 6.34 8.895 4.89a.749.749 0 1 0-.746 1.3l.686.393A7.67 7.67 0 0 0 5.351 8.6a6.71 6.71 0 0 0-1.976 4.77c0 1.776.72 3.518 1.978 4.781a6.72 6.72 0 0 0 4.772 1.968.75.75 0 0 0 0-1.5 5.23 5.23 0 0 1-3.712-1.529 5.31 5.31 0 0 1-1.538-3.72c0-1.397.546-2.716 1.537-3.71.909-.908 1.942-1.469 3.245-1.742l-.697 1.22a.751.751 0 0 0 1.303.743l1.439-2.52a.75.75 0 0 0-.278-1.022"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoveUpBold;
