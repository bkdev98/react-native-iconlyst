import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransferLeftRightDownOutline = ({
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
      d="M4.293 5.587a.75.75 0 0 1 .652-.13l7.684 2.064a.75.75 0 0 1 .263 1.319L11.4 9.99l2.848 3.7a.75.75 0 0 1-.136 1.052l-.886.682 5.271 1.416-.02-5.459-.886.682a.75.75 0 0 1-1.052-.136l-2.204-2.864a.75.75 0 0 1 1.19-.915l1.746 2.27 1.493-1.15a.75.75 0 0 1 1.208.591L20 17.816a.75.75 0 0 1-.945.728l-7.684-2.065a.75.75 0 0 1-.263-1.319l1.493-1.15-2.848-3.7a.75.75 0 0 1 .136-1.052l.886-.682L5.504 7.16l.02 5.459.886-.682a.75.75 0 0 1 1.052.137l2.204 2.863a.75.75 0 0 1-1.19.915l-1.746-2.27-1.493 1.15a.75.75 0 0 1-1.208-.591L4 6.184a.75.75 0 0 1 .293-.597"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransferLeftRightDownOutline;
