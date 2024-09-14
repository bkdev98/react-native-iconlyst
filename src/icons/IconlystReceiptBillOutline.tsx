import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillOutline = ({
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
      d="m13.883 2.57 2.142.875c.271.11.576.102.837-.023l.76-.364a1.953 1.953 0 0 1 2.796 1.763l-.01 12.255c0 1.346-.376 2.532-1.18 3.385-.811.86-1.968 1.289-3.336 1.289h-7.3c-1.37 0-2.524-.43-3.329-1.292-.797-.855-1.163-2.04-1.163-3.382L4.082 4.824A1.953 1.953 0 0 1 6.879 3.06l.755.361c.262.126.565.135.835.025l2.146-.875a4.32 4.32 0 0 1 3.268 0m-.567 1.39a2.82 2.82 0 0 0-2.132 0l-2.147.874a2.53 2.53 0 0 1-2.052-.06l-.754-.361a.453.453 0 0 0-.649.409L5.6 17.076c0 1.08.293 1.857.76 2.359.46.493 1.179.815 2.233.815h7.299c1.05 0 1.776-.322 2.244-.818.474-.503.773-1.28.773-2.356l.01-12.257a.453.453 0 0 0-.649-.408l-.76.363a2.54 2.54 0 0 1-2.05.06zM8.671 9.801a.75.75 0 0 1 .75-.75h2.89a.75.75 0 0 1 0 1.5H9.42a.75.75 0 0 1-.75-.75m0 4.395a.75.75 0 0 1 .75-.75h5.657a.75.75 0 0 1 0 1.5H9.421a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillOutline;
