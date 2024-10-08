import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketSearchOutline = ({
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
      d="M10.917 19.26H7.06a7.5 7.5 0 0 1-1.917-.128 3.61 3.61 0 0 1-2.51-2.509 7.4 7.4 0 0 1-.128-1.918 4 4 0 0 1 .017-.514l.017-.123c.017-.253.128-.491.311-.668l.08-.087c.08-.09.207-.2 1.056-.914a1.037 1.037 0 0 0-.019-1.606q-.53-.391-1.014-.837a1.2 1.2 0 0 1-.409-.782l-.017-.106a5 5 0 0 1-.018-.536c-.043-.652 0-1.306.13-1.945a3.61 3.61 0 0 1 2.492-2.495 7.5 7.5 0 0 1 1.945-.131h3.836a2.657 2.657 0 0 1 1.97.74q.177.168.372.318a1.14 1.14 0 0 0 1.274 0q.186-.141.356-.3c.113-.1.174-.154.233-.2a2.65 2.65 0 0 1 1.441-.55c.081-.005.16-.006.315-.006q.56-.021 1.118.043a3.575 3.575 0 0 1 2.991 2.99q.061.554.042 1.11v.855a.75.75 0 1 1-1.5 0v-.853q.015-.442-.025-.881a2.08 2.08 0 0 0-1.74-1.737 7 7 0 0 0-.886-.026h-.217a1.15 1.15 0 0 0-.617.236 3 3 0 0 0-.155.135 5 5 0 0 1-.518.428 2.63 2.63 0 0 1-2.947 0 5 5 0 0 1-.5-.415c-.1-.087-.133-.12-.169-.148a1.15 1.15 0 0 0-.626-.238H7.08a7.3 7.3 0 0 0-1.543.076A2.1 2.1 0 0 0 4.088 6.99a7 7 0 0 0-.075 1.53v.339l.048.087c.058.05.336.272.842.676a2.526 2.526 0 0 1 .71 3.057c-.155.334-.381.63-.662.87-.546.459-.842.707-.922.784l-.023.073v.3a7.3 7.3 0 0 0 .074 1.523 2.1 2.1 0 0 0 1.46 1.459 7.3 7.3 0 0 0 1.521.073h3.852a.75.75 0 0 1 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M12.26 11.11H9.01a.75.75 0 1 1 0-1.5h3.25a.75.75 0 0 1 0 1.5M21.26 20.057a.75.75 0 0 1-.53-.22l-1.723-1.723a.75.75 0 0 1 1.061-1.06l1.722 1.723a.75.75 0 0 1-.53 1.28"
    />
    <Path
      fill={props.color}
      d="M17.266 19.269a3.944 3.944 0 1 1 .014-7.887 3.944 3.944 0 0 1-.014 7.887m0-6.412a2.461 2.461 0 1 0-.012 4.922 2.461 2.461 0 0 0 .012-4.922"
    />
  </Svg>
);
export default IconlystTicketSearchOutline;
