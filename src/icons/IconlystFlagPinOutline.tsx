import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlagPinOutline = ({
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
      d="M9.526 13.644a.75.75 0 0 1-.604.871c-1.53.277-2.781.728-3.629 1.26-.873.547-1.16 1.07-1.16 1.46 0 .266.124.582.48.94.359.36.916.718 1.664 1.035 1.492.633 3.606 1.042 5.977 1.042s4.483-.409 5.973-1.042c.747-.317 1.302-.675 1.66-1.035.355-.357.478-.674.478-.94 0-.389-.288-.915-1.163-1.464-.849-.533-2.1-.984-3.623-1.255a.75.75 0 1 1 .263-1.477c1.644.293 3.095.794 4.157 1.461 1.036.65 1.866 1.571 1.866 2.735 0 .777-.372 1.453-.914 1.998-.539.541-1.28.994-2.137 1.358-1.717.73-4.037 1.16-6.56 1.16s-4.844-.43-6.563-1.16c-.858-.364-1.601-.817-2.14-1.358-.543-.545-.917-1.22-.917-1.998 0-1.163.827-2.082 1.862-2.731 1.06-.665 2.512-1.167 4.159-1.465a.75.75 0 0 1 .871.605"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.848 2.366a.75.75 0 0 1 .723-.043l7.2 3.427a.75.75 0 0 1 0 1.354l-6.773 3.224v6.382a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .35-.634m1.15 6.301 4.705-2.24-4.705-2.24z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlagPinOutline;
