import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVkBulk = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
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
      d="M16.217 2.5H7.782C4.622 2.5 2.5 4.722 2.5 8.03v7.939c0 3.308 2.122 5.531 5.282 5.531h8.434c3.16 0 5.284-2.223 5.284-5.531V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.597 14.999a9 9 0 0 0-1.334-2.01 5.5 5.5 0 0 0-.919-.831q.478-.334.92-.828a8.8 8.8 0 0 0 1.335-2.022.751.751 0 0 0-1.349-.656 7.3 7.3 0 0 1-1.103 1.678c-.411.457-.829.761-1.271.925-.309.11-.635.137-.931.148V8.99a.75.75 0 0 0-.75-.75h-1.267a.75.75 0 0 0 0 1.5h.517l-.002 4.753c-2.758-.59-3.652-4.369-3.652-5.503a.75.75 0 0 0-1.5 0c0 2.392 1.783 7.08 5.904 7.08a.75.75 0 0 0 .75-.75v-2.402c.389.016.685.057.923.135.441.164.859.47 1.277.936.418.47.791 1.032 1.107 1.674a.75.75 0 0 0 1.005.341.75.75 0 0 0 .34-1.005"
    />
  </Svg>
);
export default IconlystVkBulk;
