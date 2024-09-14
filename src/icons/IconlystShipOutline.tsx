import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShipOutline = ({
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
      d="M12.243 7.928a.75.75 0 0 1 .75.75v12.336a.75.75 0 0 1-1.5 0V8.678a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.087 6.282a.25.25 0 0 0-.25.25v3.373a.75.75 0 1 1-1.5 0V6.532c0-.966.783-1.75 1.75-1.75h8.31c.966 0 1.75.784 1.75 1.75v3.373a.75.75 0 1 1-1.5 0V6.532a.25.25 0 0 0-.25-.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.691 9.422a1.25 1.25 0 0 0-.881 0l-7.495 2.824a.25.25 0 0 0-.156.284l.92 4.51a3.25 3.25 0 0 0 2.49 2.525l3.987.871c.458.1.93.1 1.388 0l3.987-.871a3.25 3.25 0 0 0 2.491-2.525l.92-4.51a.25.25 0 0 0-.157-.284l.265-.701-.265.701zm-1.41-1.404a2.75 2.75 0 0 1 1.94 0l7.493 2.825a1.75 1.75 0 0 1 1.098 1.987l-.92 4.51a4.75 4.75 0 0 1-3.64 3.69l-3.988.872a4.75 4.75 0 0 1-2.028 0L7.25 21.03a4.75 4.75 0 0 1-3.64-3.69l.735-.15-.735.15-.92-4.51.68-.138-.68.138a1.75 1.75 0 0 1 1.097-1.987zM9.655 4.235c0-.966.784-1.75 1.75-1.75h1.686c.966 0 1.75.784 1.75 1.75v1.297a.75.75 0 0 1-1.5 0V4.235a.25.25 0 0 0-.25-.25h-1.686a.25.25 0 0 0-.25.25v1.297a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShipOutline;
