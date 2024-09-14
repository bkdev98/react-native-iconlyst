import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillDownBold = ({
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
      d="M11.876 21.377a4.1 4.1 0 0 1-1.54-.304l-2.142-.875a1.29 1.29 0 0 0-1.04.03l-.758.363c-.53.254-1.144.22-1.643-.094a1.69 1.69 0 0 1-.795-1.445l.01-12.253c0-2.729 1.635-4.424 4.266-4.424h7.299c2.656 0 4.243 1.654 4.243 4.424l.012 7.97c0 .118-.109.207-.227.194a.2.2 0 0 1-.18-.193v-.036a2.5 2.5 0 0 0-5 0v1.216a2.501 2.501 0 0 0-1.691 4.263l.5.502c.152.152.099.409-.106.472-.39.12-.794.19-1.208.19m1.49-11.916h-4.97a.75.75 0 0 1 0-1.5h4.97a.75.75 0 0 1 0 1.5m-1.658 3.86H8.395a.75.75 0 0 1 0-1.5h3.313a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.877 21.625h.004c.23 0 .437-.104.575-.27l2.368-2.376a.751.751 0 0 0-1.062-1.06l-1.131 1.137v-4.322a.75.75 0 0 0-1.5 0v4.328l-1.137-1.142a.749.749 0 1 0-1.062 1.059l2.414 2.425c.14.142.332.22.53.22"
    />
  </Svg>
);
export default IconlystReceiptBillDownBold;
