import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountDownBold = ({
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
      d="M13.251 16.457a.947.947 0 0 1 0-1.893.947.947 0 0 1 0 1.893m-4.776-.128a.749.749 0 0 1-.531-1.28l4.9-4.897a.749.749 0 1 1 1.06 1.06L9.004 16.11a.75.75 0 0 1-.53.22m-.933-5.584a.947.947 0 0 1 1.892 0 .947.947 0 0 1-1.892 0m12.612-.013q-.174.174-.38.312c-.014.01-.03.015-.044.024-.123.078-.25.15-.386.206-.033.014-.07.02-.104.033a2.5 2.5 0 0 1-.362.11c-.143.03-.288.04-.435.044-.02 0-.039.006-.059.006h-.002a2.6 2.6 0 0 1-.495-.05c-.092-.019-.177-.053-.265-.08-.067-.023-.138-.037-.203-.064-.098-.04-.188-.097-.279-.15-.05-.028-.103-.05-.15-.082a2.5 2.5 0 0 1-.375-.307q0-.002-.004-.004l-2.477-2.488a2.5 2.5 0 0 1 1.453-4.241c.164-.02.297-.153.297-.317v-.559q0-.067.004-.136c.01-.19-.131-.364-.321-.364H7.669c-3.159 0-5.282 2.221-5.282 5.526V16.1c0 3.305 2.123 5.526 5.282 5.526h8.434c3.16 0 5.284-2.22 5.284-5.526V10.22a.3.3 0 0 0-.512-.212z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.392 5.947a.75.75 0 0 0-1.061.002L19.134 7.15V3.125a.75.75 0 0 0-1.5 0v4.027l-1.197-1.203a.751.751 0 0 0-1.063 1.059l2.478 2.488c.023.024.054.034.08.054.05.04.1.083.162.108a.7.7 0 0 0 .289.059c.03 0 .057-.014.086-.017.069-.008.139-.014.203-.041a.8.8 0 0 0 .244-.165l2.478-2.486a.75.75 0 0 0-.002-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscountDownBold;
