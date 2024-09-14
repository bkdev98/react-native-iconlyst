import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallEmergencyBulk = ({
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
      fillRule="evenodd"
      d="M19.9 14.912c-.24-.23-.502-.477-.776-.75-1.28-1.277-2.386-.846-3.272-.497-1.063.417-2.068.81-3.898-1.023s-1.44-2.835-1.022-3.898c.348-.888.78-1.993-.498-3.271q-.416-.42-.761-.788c-.94-.99-1.62-1.706-2.575-1.718-.858.019-1.692.51-2.987 1.805-.013.013-.078.078-.09.092-.285.279-1.046 1.023-1.054 2.474-.013 2.266 1.814 5.248 5.43 8.86 3.603 3.602 6.575 5.427 8.838 5.427l.025-.001c1.45-.008 2.194-.77 2.473-1.055l.093-.09c1.29-1.288 1.81-2.151 1.802-2.98-.013-.96-.732-1.642-1.728-2.587"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.658 6.905-1.432-.825 1.432-.825a.75.75 0 1 0-.748-1.299l-1.435.827V3.125a.75.75 0 0 0-1.5 0v1.658l-1.434-.827a.749.749 0 1 0-.748 1.299l1.432.825-1.432.825a.748.748 0 1 0 .748 1.299l1.434-.827v1.658a.75.75 0 0 0 1.5 0V7.377l1.435.827a.745.745 0 0 0 1.023-.276.75.75 0 0 0-.275-1.023"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallEmergencyBulk;
