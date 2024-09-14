import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowUpRightOutline = ({
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
      d="M13.517 5.806c-1.572.001-3.145.003-4.71-.001-.57-.002-.85.688-.455 1.084l1.756 1.757c.5.5.5 1.31 0 1.81l-5.393 5.393a.627.627 0 0 0 0 .887l2.547 2.546a.627.627 0 0 0 .887 0l5.393-5.393c.5-.5 1.31-.5 1.81 0l1.76 1.76a.634.634 0 0 0 1.08-.45q-.005-2.639-.002-5.278.002-1.748.001-3.492a.623.623 0 0 0-.622-.624q-2.02-.002-4.052 0m-.009-1.5q2.025-.004 4.064 0a2.123 2.123 0 0 1 2.12 2.122q0 1.75-.002 3.498c0 1.757-.002 3.512.002 5.27.003 1.896-2.294 2.86-3.64 1.514l-1.605-1.604-5.238 5.237c-.83.83-2.177.83-3.008 0l-2.547-2.547a2.127 2.127 0 0 1 0-3.008L8.892 9.55 7.29 7.95C5.94 6.6 6.913 4.3 8.81 4.304c1.57.004 3.133.002 4.697 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowUpRightOutline;
