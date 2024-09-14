import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCodeSandboxBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.9 11.549a.2.2 0 0 0 .201 0l7.31-4.233c.117-.068.135-.23.03-.315a2.3 2.3 0 0 0-.308-.214l-2.319-1.342a.2.2 0 0 0-.2 0l-4.239 2.439a.75.75 0 0 1-.748 0l-4.239-2.44a.2.2 0 0 0-.2 0L4.871 6.786a2.3 2.3 0 0 0-.31.215c-.105.085-.087.247.03.315zM6.72 15.629a.2.2 0 0 0-.1-.174l-2.915-1.684a.2.2 0 0 0-.3.173v1.915a2.96 2.96 0 0 0 1.464 2.543l1.55.894a.2.2 0 0 0 .3-.173z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.901 6.31a.2.2 0 0 0 .2 0l2.813-1.619a.2.2 0 0 0 0-.346l-1.452-.84a2.95 2.95 0 0 0-2.926.001l-1.448.838a.2.2 0 0 0 0 .346zM17.382 15.455a.2.2 0 0 0-.1.174v3.495a.2.2 0 0 0 .3.173l1.554-.896a2.96 2.96 0 0 0 1.46-2.542v-1.915a.2.2 0 0 0-.3-.173zM11.25 13.02a.2.2 0 0 0-.1-.172L3.767 8.573a.19.19 0 0 0-.283.115 2.7 2.7 0 0 0-.08.631v2.43a.2.2 0 0 0 .1.173l4.341 2.51a.75.75 0 0 1 .374.648v5.228c0 .015.004.03.016.037l2.303 1.328q.226.13.465.215c.123.044.247-.051.247-.182z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.782 20.308V15.08a.75.75 0 0 1 .375-.649l4.339-2.51a.2.2 0 0 0 .1-.172V9.32c0-.216-.03-.427-.08-.631a.19.19 0 0 0-.282-.116l-7.384 4.275a.2.2 0 0 0-.1.173v8.684c0 .13.124.226.248.182q.24-.086.466-.215l2.3-1.326q.02-.013.018-.038"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCodeSandboxBold;
