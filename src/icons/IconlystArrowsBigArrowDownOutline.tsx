import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowDownOutline = ({
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
      d="M10.117 7.202a.19.19 0 0 0-.192.191v5.609a.75.75 0 0 1-.75.75H6.138l5.719 6.434c.076.085.21.085.286 0l5.719-6.434h-3.037a.75.75 0 0 1-.75-.75V7.393a.19.19 0 0 0-.192-.191zm-1.692.191c0-.934.758-1.691 1.692-1.691h3.766c.934 0 1.692.757 1.692 1.691v4.859h2.909c1.053 0 1.612 1.244.912 2.032l-6.132 6.898a1.69 1.69 0 0 1-2.528 0l-6.132-6.898c-.7-.788-.141-2.032.912-2.032h2.91zM8.443 3a.75.75 0 0 1 .75-.75h5.614a.75.75 0 0 1 0 1.5H9.193a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsBigArrowDownOutline;
