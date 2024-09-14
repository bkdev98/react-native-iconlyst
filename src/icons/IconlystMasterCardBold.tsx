import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMasterCardBold = ({
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
      d="M9.97 12c0-.896.306-1.717.805-2.387a2.5 2.5 0 0 0-.768-.133 2.524 2.524 0 0 0 0 5.05c.27 0 .526-.054.77-.133A4 4 0 0 1 9.97 12M11.47 12c0 .58.203 1.107.53 1.534.327-.427.53-.954.53-1.533 0-.577-.203-1.102-.53-1.527-.327.425-.53.95-.53 1.527M13.993 9.481a2.5 2.5 0 0 0-.768.132c.499.669.805 1.49.805 2.388a4 4 0 0 1-.807 2.396c.244.079.5.133.77.133a2.524 2.524 0 0 0 0-5.049"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.993 16.03c-.729 0-1.403-.21-1.993-.55-.59.34-1.265.55-1.993.55A4.03 4.03 0 0 1 5.983 12a4.026 4.026 0 0 1 4.024-4.02c.728 0 1.403.21 1.993.55a4 4 0 0 1 1.993-.55A4.025 4.025 0 0 1 18.016 12a4.03 4.03 0 0 1-4.023 4.03m3.602-12.82H6.404C3.471 3.21 1.5 5.273 1.5 8.34v7.32c0 3.069 1.971 5.13 4.904 5.13h11.19c2.934 0 4.906-2.061 4.906-5.13V8.34c0-3.068-1.972-5.13-4.905-5.13"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMasterCardBold;
