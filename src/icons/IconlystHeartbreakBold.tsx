import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartbreakBold = ({
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
      d="M21.485 6.977c-.682-1.681-1.994-2.906-3.696-3.452a6.1 6.1 0 0 0-2.91-.207c-.59.099-1.14.37-1.644.685.272.356.524.737.73 1.165.844 1.706.556 2.043.402 2.225l-.012.014c-.07.078-1.418 1.618-2.141 2.442l2.13 2.274a.75.75 0 0 1 .076.93l-1.946 2.9a.75.75 0 0 1-1.246-.835l1.613-2.406-2.186-2.334a.75.75 0 0 1-.017-1.006c1.224-1.397 1.915-2.187 2.335-2.634a10 10 0 0 0-.354-.91c-.437-.902-1.05-1.596-1.773-2.013-.998-.574-2.337-.68-3.585-.284-.033.01-.066.005-.1.01-3.692 1.226-4.83 5.286-3.791 8.518 1.623 5.212 8.619 8.525 8.917 8.664a.5.5 0 0 0 .422 0c.292-.136 7.183-3.392 8.905-8.657v-.002c.552-1.715.505-3.522-.13-5.087"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartbreakBold;
