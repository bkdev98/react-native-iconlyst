import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTradeBitcoinBold = ({
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
      d="M13.423 10.284a.647.647 0 0 1-.642.716h-1.373V9.71h1.3c.364 0 .685.26.715.573m-.166 3.805a.64.64 0 0 1-.476.211h-1.373V13h1.3c.364 0 .685.262.716.585a.66.66 0 0 1-.167.504M11.129 16.3a.997.997 0 0 0 1.994-.03v-.005a2.63 2.63 0 0 0 1.613-.83c.5-.552.75-1.295.678-2.04a2.58 2.58 0 0 0-.582-1.386 2.66 2.66 0 0 0 .582-1.915c-.116-1.2-1.088-2.16-2.291-2.345V7.73a.997.997 0 0 0-1.996-.02h-.72a1 1 0 0 0-1 1v6.59a1 1 0 0 0 1 1z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.175 6.477a.75.75 0 0 0-.52-.61l-3.106-.963a.75.75 0 0 0-.973.69l-.107 3.093a.75.75 0 0 0 1.165.651l.741-.49c1.256 2.922.709 6.461-1.645 8.834a8.03 8.03 0 0 1-7.107 2.24.76.76 0 0 0-.87.606.75.75 0 0 0 .607.87q.841.15 1.68.15a9.53 9.53 0 0 0 6.754-2.809c2.86-2.883 3.473-7.216 1.846-10.73l1.206-.8a.75.75 0 0 0 .328-.732M6.147 14.633a.75.75 0 0 0-.78.029l-.742.492C3.37 12.23 3.916 8.692 6.27 6.319a8.02 8.02 0 0 1 7.106-2.24.751.751 0 0 0 .264-1.477 9.54 9.54 0 0 0-8.434 2.66c-2.86 2.882-3.475 7.216-1.847 10.73l-1.206.8a.75.75 0 0 0 .192 1.34l3.107.965a.753.753 0 0 0 .971-.691l.108-3.093a.75.75 0 0 0-.384-.68"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTradeBitcoinBold;
