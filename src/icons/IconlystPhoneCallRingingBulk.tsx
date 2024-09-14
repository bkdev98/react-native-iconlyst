import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallRingingBulk = ({
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
      d="M19.802 14.91c-.241-.23-.501-.476-.775-.75-1.28-1.278-2.385-.845-3.272-.496-1.062.416-2.065.81-3.896-1.023-1.83-1.827-1.438-2.831-1.022-3.894.347-.89.779-1.997-.5-3.275a43 43 0 0 1-.766-.793c-.938-.986-1.616-1.7-2.57-1.71h-.024c-.82 0-1.68.524-2.958 1.802-.013.013-.078.078-.09.092-.285.279-1.045 1.023-1.054 2.474-.013 2.266 1.814 5.248 5.429 8.86 3.6 3.602 6.573 5.427 8.834 5.427l.024-.001c1.45-.008 2.194-.77 2.474-1.055l.093-.09c1.289-1.288 1.81-2.152 1.8-2.98-.013-.96-.732-1.643-1.727-2.588"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.236 5.915a.75.75 0 0 0 .75-.75v-2.04a.75.75 0 0 0-1.5 0v2.04c0 .414.336.75.75.75M17.885 7.365a.75.75 0 0 0 .53-.22l1.443-1.44a.751.751 0 0 0-1.059-1.062l-1.444 1.44a.751.751 0 0 0 .53 1.282M21.375 9.515h-2.04a.75.75 0 0 0 0 1.5h2.04a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallRingingBulk;
