import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasMugBroken = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.702 3.615c-3.783 0-6.85.854-6.85 1.908s3.067 1.908 6.85 1.908c3.784 0 6.85-.854 6.85-1.908 0-.716-1.417-1.34-3.513-1.667M13.703 11.35v5.278M15.99 12.67l-4.572 2.64M15.99 15.31l-4.572-2.64"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.852 5.522v12.211c0 1.923 1.493 3.052 3.68 3.56M6.743 16.337c-1.239 0-1.858 0-2.318-.269a1.97 1.97 0 0 1-.71-.709c-.268-.46-.268-1.08-.268-2.318v-1.485c0-1.238 0-1.858.269-2.318a1.97 1.97 0 0 1 .709-.71c.46-.268 1.08-.268 2.318-.268M13.702 21.615c3.784 0 6.85-1.218 6.85-3.882V5.523"
    />
  </Svg>
);
export default IconlystChristmasMugBroken;
