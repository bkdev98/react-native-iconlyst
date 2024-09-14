import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldLockBold = ({
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
      d="M13.296 9.9c0-.712-.582-1.29-1.296-1.29s-1.296.578-1.296 1.29c0 .41.192.788.528 1.035a.75.75 0 0 1 .27.841l-.634 1.91a.11.11 0 0 0 .016.105.11.11 0 0 0 .095.048h2.04q.06 0 .095-.048a.11.11 0 0 0 .016-.104l-.633-1.91a.75.75 0 0 1 .27-.842c.335-.247.529-.625.529-1.036"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.554 13.214a1.617 1.617 0 0 1-1.535 2.126h-2.04a1.62 1.62 0 0 1-1.534-2.127l.48-1.446A2.75 2.75 0 0 1 9.202 9.9a2.796 2.796 0 0 1 5.592 0c0 .704-.257 1.36-.72 1.867zm4.801-8.078C18.651 4.431 13.025 2.5 12 2.5S5.35 4.431 4.643 5.137c-.56.562-.552.996-.509 3.397.018.974.042 2.3.042 4.136 0 6.407 7.602 8.785 7.678 8.809a.5.5 0 0 0 .29 0c.077-.024 7.68-2.402 7.68-8.809 0-1.831.023-3.155.041-4.129.043-2.407.051-2.841-.51-3.405"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldLockBold;
