import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScaleOutline = ({
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
      fillRule="evenodd"
      d="M7.588 21.283a.75.75 0 0 1 .75-.75h7.82a.75.75 0 0 1 0 1.5h-7.82a.75.75 0 0 1-.75-.75M17.405 6.365a.75.75 0 0 1 .674.418l3.491 7.07a.75.75 0 0 1-.066.773c-2.293 3.148-6.596 3.045-8.214-.098a.75.75 0 0 1-.007-.673l3.45-7.069a.75.75 0 0 1 .672-.42m.006 2.452-2.603 5.334c1.082 1.596 3.535 1.853 5.207-.061zM7.049 8.104a.75.75 0 0 1 .674.417l3.491 7.068a.75.75 0 0 1-.066.774c-2.293 3.149-6.597 3.046-8.213-.098a.75.75 0 0 1-.007-.672l3.449-7.068a.75.75 0 0 1 .672-.421m.006 2.451L4.452 15.89c1.082 1.596 3.536 1.852 5.207-.062z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.326 14.967a.75.75 0 0 1 .75-.75h5.99a.75.75 0 0 1 0 1.5h-5.99a.75.75 0 0 1-.75-.75M13.684 13.229a.75.75 0 0 1 .75-.75h5.99a.75.75 0 0 1 0 1.5h-5.99a.75.75 0 0 1-.75-.75M12.403 2.533a.75.75 0 0 1 .75.75V7.07l4.134-.693a.75.75 0 1 1 .248 1.479L7.171 9.594a.75.75 0 0 1-.248-1.48l4.73-.793V3.283a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScaleOutline;
