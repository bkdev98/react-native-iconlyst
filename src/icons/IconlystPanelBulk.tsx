import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPanelBulk = ({
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
      d="M9.182 8.575h6.22l2.09.052c1.99.25 3.297 1.78 3.297 3.987v4.971c0 2.416-1.556 4.04-3.872 4.04H7.081c-2.315 0-3.87-1.624-3.87-4.04v-4.97c0-2.417 1.555-4.04 3.87-4.04z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.777 17.624h6.447a.75.75 0 0 0 0-1.5H8.777a.75.75 0 0 0 0 1.5M12.001 12.514H8.777a.75.75 0 0 0 0 1.5h3.224a.75.75 0 0 0 0-1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.182 8.575H7.124l.005-.007.004-.007 3.264-3.454a2 2 0 0 1-.133-.702c0-1.119.91-2.03 2.029-2.03 1.12 0 2.031.911 2.031 2.03 0 .247-.051.48-.132.699l3.259 3.457q.014.016.023.036l.018.03-2.09-.052-2.219-2.354a2 2 0 0 1-.89.214c-.32 0-.618-.081-.887-.213zm3.642-4.17a.53.53 0 1 0-1.06 0 .53.53 0 0 0 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPanelBulk;
