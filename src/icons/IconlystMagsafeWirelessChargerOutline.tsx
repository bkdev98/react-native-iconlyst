import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagsafeWirelessChargerOutline = ({
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
      d="M12.872 3.75a6.485 6.485 0 1 0 0 12.97 6.485 6.485 0 0 0 0-12.97m-7.985 6.485a7.985 7.985 0 0 1 7.985-7.985 7.985 7.985 0 1 1 0 15.969 7.984 7.984 0 0 1-7.985-7.984"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.868 16.719a.75.75 0 0 1 .751.749l.005 3.53a.75.75 0 1 1-1.5.003l-.005-3.531a.75.75 0 0 1 .75-.751"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMagsafeWirelessChargerOutline;
