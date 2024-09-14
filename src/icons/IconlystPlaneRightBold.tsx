import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneRightBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.347 8.348c1.087-1.216 1.703-3.083.484-4.306-1.221-1.227-3.087-.61-4.306.482-.864.781-1.686 1.622-2.481 2.436l-.13.133c-.152.161-.184.175-.405.094a172 172 0 0 0-4.892-1.743c-1.009-.354-1.87-.286-2.555.203-.418.295-.779.633-1.16.992-.15.14-.3.282-.459.424a.502.502 0 0 0-.022.723l4.348 4.417L7 14.331l-2.494-.243a.51.51 0 0 0-.403.144l-1.458 1.46a.5.5 0 0 0 .097.782L6.278 18.6l2.123 3.534a.5.5 0 0 0 .428.242c.132 0 .26-.052.354-.146l1.459-1.46a.5.5 0 0 0 .144-.405l-.26-2.504 2.14-1.762c.84.825 3.124 3.072 4.421 4.353a.5.5 0 0 0 .723-.021q.211-.233.42-.455c.343-.365.697-.743.997-1.16.494-.697.56-1.533.204-2.553a184 184 0 0 0-1.747-4.893c-.079-.21-.069-.253.1-.415.844-.82 1.738-1.696 2.563-2.606"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneRightBold;
