import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldLockBulk = ({
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
      d="M19.356 5.136C18.652 4.431 13.025 2.5 12 2.5S5.349 4.431 4.644 5.137c-.56.562-.552.996-.51 3.397.019.974.043 2.3.043 4.136 0 6.407 7.602 8.785 7.678 8.809a.5.5 0 0 0 .29 0c.077-.024 7.68-2.402 7.68-8.809 0-1.831.023-3.155.04-4.129.044-2.407.052-2.841-.51-3.405"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.555 13.213a1.617 1.617 0 0 1-1.535 2.126h-2.041a1.62 1.62 0 0 1-1.533-2.127l.479-1.446A2.75 2.75 0 0 1 9.204 9.9a2.796 2.796 0 0 1 5.592 0c0 .704-.257 1.36-.72 1.867zM12 8.61c.714 0 1.296.578 1.296 1.289 0 .41-.193.789-.53 1.036a.75.75 0 0 0-.268.84l.633 1.912a.11.11 0 0 1-.016.104.11.11 0 0 1-.095.048h-2.041a.11.11 0 0 1-.094-.048.11.11 0 0 1-.016-.105l.633-1.91a.75.75 0 0 0-.27-.841 1.28 1.28 0 0 1-.528-1.036c0-.711.582-1.29 1.296-1.29"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldLockBulk;
