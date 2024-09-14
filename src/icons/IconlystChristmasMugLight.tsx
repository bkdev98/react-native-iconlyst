import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasMugLight = ({
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
      stroke={props.color}
      strokeWidth={1.5}
      d="M20.553 5.523c0 1.054-3.067 1.908-6.85 1.908-3.784 0-6.851-.854-6.851-1.908 0-.643 1.142-1.212 2.892-1.557 1.118-.221 2.484-.35 3.958-.35 3.784 0 6.85.853 6.85 1.907Z"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M6.852 5.522v12.211c0 2.756 3.067 3.882 6.85 3.882 3.784 0 6.85-1.218 6.85-3.882V5.523"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.95 15.221-.317-.84a1.69 1.69 0 0 1 3.162-1.196l1.81 4.946M17.558 16.83l.01.01M16.187 10.45v2.28M17.326 11.59h-2.28M6.743 16.337c-1.239 0-1.858 0-2.318-.269a1.97 1.97 0 0 1-.71-.709c-.268-.46-.268-1.08-.268-2.318v-1.485c0-1.238 0-1.858.269-2.318a1.97 1.97 0 0 1 .709-.71c.46-.268 1.08-.268 2.318-.268"
    />
  </Svg>
);
export default IconlystChristmasMugLight;
