import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarStickerBold = ({
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
      d="M15.128 11.07H8.873a.75.75 0 0 1 0-1.5h6.255a.75.75 0 0 1 0 1.5m1.397-7.374v-.7a.75.75 0 0 0-1.5 0v2.962c0 .292.172.54.416.663a.74.74 0 0 1-.334.087.75.75 0 0 1-.75-.75V3.863a.2.2 0 0 0-.2-.2H9.254v-.667a.75.75 0 0 0-1.5 0v2.962c0 .292.172.54.416.663a.74.74 0 0 1-.334.087.75.75 0 0 1-.75-.75V4.003a.193.193 0 0 0-.238-.19A4.885 4.885 0 0 0 3.18 8.55v8.522c0 2.574 2.076 4.68 4.634 4.68H13.3a.473.473 0 0 0 .472-.477v-3.34c0-1.9 1.552-3.457 3.432-3.467h3.153a.464.464 0 0 0 .463-.467v-5.68a4.626 4.626 0 0 0-4.295-4.625"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.896 15.977c-.845-.003-1.84 0-2.556.007-1.136 0-2.072.946-2.072 2.093v2.735c0 .447.537.67.844.347l2.081-2.186c.76-.797 1.514-1.59 2.055-2.16a.494.494 0 0 0-.352-.836"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarStickerBold;
