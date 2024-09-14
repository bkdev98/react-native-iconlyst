import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyOutline = ({
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
      fillRule="evenodd"
      d="M7.544 19.952a1.296 1.296 0 0 1 0 2.589 1.296 1.296 0 0 1 0-2.59m11.28 0c.715 0 1.296.58 1.296 1.294s-.581 1.295-1.296 1.295a1.296 1.296 0 0 1 0-2.59M3.268 3.009l2.08.36c.335.06.59.337.619.677l.235 2.801h.874l.423.001h1.984l1.77.002h1.572l.291.001h1.092l.255.001h.952l.222.001h.821l.725.002h.778l.14.001h.509l.433.002h.444l.286.002h.23l.05.001h.17l.036.001h.092l.026.001h.067l.018.001h.046l.012.001h.036l.02.002h.004l.013.001a2.08 2.08 0 0 1 1.38.82c.335.447.475.998.395 1.55l-.95 6.558a2.56 2.56 0 0 1-2.522 2.19H7.975a2.56 2.56 0 0 1-2.54-2.344L4.52 4.748l-1.507-.26A.75.75 0 0 1 2.4 3.62a.76.76 0 0 1 .867-.61m3.607 5.339h-.547l.603 7.171c.044.552.495.966 1.046.966h10.917c.52 0 .966-.388 1.04-.903l.95-6.559a.59.59 0 0 0-.112-.438.58.58 0 0 0-.388-.23h-.16l-.075.001h-.567l-.149.001h-1.559l-1.52-.001h-.276l-.86-.001h-.296l-.912-.001h-.937l-.317-.001-.958-.001h-.32l-.64-.001h-.955l-.316-.001h-.93l-.304-.001-1.176-.001zm10.413 2.196a.75.75 0 0 1 0 1.5h-2.772a.75.75 0 1 1 0-1.5z"
    />
  </Svg>
);
export default IconlystBuyOutline;
