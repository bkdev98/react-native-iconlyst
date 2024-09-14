import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardSendLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.17 14.958c0 2.194-1.365 3.743-3.56 3.743H6.562C4.366 18.701 3 17.152 3 14.958V9.041c0-2.194 1.366-3.744 3.562-3.744h8.164M13.937 10.057H3M6.915 14.85h2.667M6.915 14.85h2.667M19.17 5.898v5.344M17.342 7.735l1.829-1.837 1.83 1.837"
    />
  </Svg>
);
export default IconlystBankCardSendLight;
