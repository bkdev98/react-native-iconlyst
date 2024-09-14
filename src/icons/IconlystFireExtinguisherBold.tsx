import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFireExtinguisherBold = ({
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
      d="M6.84 19.219a.2.2 0 0 0-.2.2v.71c0 .83.67 1.5 1.5 1.5h5.61c.83 0 1.5-.67 1.5-1.5v-.71a.2.2 0 0 0-.2-.2zM12.16 12.658c-.14 0-.25.11-.25.25v1.62c0 .14.11.25.25.25h2.89a.2.2 0 0 0 .2-.2v-1.72a.2.2 0 0 0-.2-.2z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.432 3.873h1.031a.25.25 0 0 1 .25.25l-.001 3.116h-.001c-.25-.051-.5-.07-.76-.07s-.519.02-.769.07V4.122a.25.25 0 0 1 .25-.25m8.909-.315c-.29-.25-.67-.349-1.04-.289l-2.88.449c-.6.09-1.05.58-1.1 1.171v.004h-1.108v-.77c0-.965-.785-1.75-1.75-1.75h-1.031c-.965 0-1.75.785-1.75 1.75v.77h-.22a4.266 4.266 0 0 0-4.263 4.26.75.75 0 0 0 1.5 0 2.764 2.764 0 0 1 2.763-2.76h.22v1.425a4.32 4.32 0 0 0-2.041 3.66v6.04c0 .11.09.2.2.2h8.21a.2.2 0 0 0 .2-.2v-1.04a.2.2 0 0 0-.2-.2h-2.89c-.97 0-1.75-.78-1.75-1.75v-1.62c0-.959.78-1.75 1.75-1.75h2.864c.116 0 .209-.1.194-.215a4.33 4.33 0 0 0-2.007-3.124V6.393h1.11c.042.598.5 1.096 1.099 1.196l2.89.439c.06.01.12.01.18.01a1.31 1.31 0 0 0 1.31-1.3v-2.19c0-.38-.17-.74-.46-.99"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFireExtinguisherBold;
