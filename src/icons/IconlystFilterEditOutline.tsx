import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterEditOutline = ({
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
      d="M13.843 3.833v.001l-3.206 3.499a1.02 1.02 0 0 0-.25.565l-.082.762c-.006.049.037.09.086.082l.738-.124c.228-.038.436-.153.59-.325l.006-.007 3.176-3.466.003-.003a.26.26 0 0 0-.014-.37l-.678-.628a.26.26 0 0 0-.369.014m1.388-1.114a1.76 1.76 0 0 0-2.489.096l-.003.003-3.211 3.505-.007.007c-.35.392-.569.884-.626 1.406l-.082.76a1.575 1.575 0 0 0 1.826 1.725l.738-.124a2.5 2.5 0 0 0 1.457-.801l3.17-3.46.002-.001a1.76 1.76 0 0 0-.097-2.489zM6.834 5.113c-1.025 0-1.855.831-1.855 1.856v1.99c0 .764.301 1.498.838 2.043l4.22 3.758.031.03c.42.42.658.99.658 1.585v3.13c0 .525.53.885 1.018.69l1.828-.727a.74.74 0 0 0 .468-.69v-1.93c0-.63.263-1.23.727-1.654l4.769-4.717.025-.024a2.9 2.9 0 0 0 .962-2.16V6.97c0-1.025-.831-1.856-1.856-1.856a.75.75 0 0 1 0-1.5 3.356 3.356 0 0 1 3.355 3.356v1.324a4.4 4.4 0 0 1-1.443 3.263L15.81 16.27l-.025.024a.74.74 0 0 0-.245.552v1.93c0 .92-.56 1.745-1.414 2.085m-.002 0-1.825.727a2.244 2.244 0 0 1-3.073-2.084v-3.13a.74.74 0 0 0-.206-.512l-4.218-3.756-.032-.03a4.4 4.4 0 0 1-1.291-3.118v-1.99a3.356 3.356 0 0 1 3.355-3.356.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterEditOutline;
