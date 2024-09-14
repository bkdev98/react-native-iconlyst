import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAttachBold = ({
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
      d="M12 22c-4.411 0-8-3.589-8-8V7.65A5.657 5.657 0 0 1 9.65 2a5.657 5.657 0 0 1 5.65 5.65v6.194a3.35 3.35 0 0 1-3.347 3.348 3.35 3.35 0 0 1-3.348-3.348V7.999a1 1 0 1 1 2 0v5.845a1.35 1.35 0 0 0 1.348 1.348c.743 0 1.347-.605 1.347-1.348V7.65A3.654 3.654 0 0 0 9.65 4 3.654 3.654 0 0 0 6 7.65V14c0 3.309 2.691 6 6 6s6-2.691 6-6V4.881a1 1 0 1 1 2 0V14c0 4.411-3.589 8-8 8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAttachBold;
