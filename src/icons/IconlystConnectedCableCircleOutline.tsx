import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectedCableCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.65 6.471A8.25 8.25 0 1 0 6.983 18.138 8.25 8.25 0 0 0 18.65 6.471M5.922 5.411c3.808-3.808 9.981-3.808 13.789 0s3.807 9.98 0 13.788-9.981 3.808-13.789 0-3.807-9.981 0-13.789"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.08 9.868a1.76 1.76 0 0 0-2.491 0l-1.087 1.086a.75.75 0 1 1-1.06-1.06l1.086-1.087a3.262 3.262 0 0 1 4.613 4.613l-1.087 1.086a.75.75 0 1 1-1.06-1.06l1.086-1.087a1.76 1.76 0 0 0 0-2.491"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.571 5.376a.75.75 0 0 1 0 1.06l-3.427 3.428a.75.75 0 0 1-1.061-1.06l3.428-3.428a.75.75 0 0 1 1.06 0M11.493 9.915a.75.75 0 0 1 0 1.06l-1.087 1.087a1.762 1.762 0 0 0 2.491 2.492l.495.495-.495-.495 1.087-1.087a.75.75 0 0 1 1.06 1.06l-1.086 1.087a3.262 3.262 0 1 1-4.613-4.612l1.087-1.087a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.015 9.481a.75.75 0 0 1 1.06 0l4.396 4.396a.75.75 0 0 1-1.061 1.06l-4.395-4.395a.75.75 0 0 1 0-1.06M10.405 14.556a.75.75 0 0 1 0 1.06l-3.468 3.468a.75.75 0 1 1-1.061-1.06l3.468-3.468a.75.75 0 0 1 1.06 0M17.177 13.998a.75.75 0 0 1 .919-.53l.985.264a.75.75 0 0 1-.388 1.449l-.986-.265a.75.75 0 0 1-.53-.918M14.398 16.64a.75.75 0 0 1 .967.436l.362.955a.75.75 0 1 1-1.403.53l-.361-.953a.75.75 0 0 1 .435-.968M5.866 9.763a.75.75 0 0 1 .919-.53l.985.264a.75.75 0 0 1-.388 1.449l-.985-.264a.75.75 0 0 1-.53-.919M10.187 5.42a.75.75 0 0 1 .966.436l.362.954a.75.75 0 1 1-1.403.531l-.361-.954a.75.75 0 0 1 .436-.967"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConnectedCableCircleOutline;
