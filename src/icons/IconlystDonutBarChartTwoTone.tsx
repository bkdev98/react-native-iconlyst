import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDonutBarChartTwoTone = ({
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
      stroke={props.color}
      strokeWidth={1.5}
      d="M16.155 6.19a7.717 7.717 0 1 0 .317 11.58.467.467 0 0 0-.008-.683l-1.616-1.53c-.196-.186-.505-.175-.71 0a4.5 4.5 0 0 1-2.776 1.07 4.51 4.51 0 0 1-3.421-7.61 4.51 4.51 0 0 1 6.004-.491c.215.164.524.158.71-.039l1.53-1.616a.467.467 0 0 0-.03-.682Z"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M19.588 16.287c.206.175.517.15.677-.068a6.47 6.47 0 0 0-.684-8.4.463.463 0 0 0-.678.042l-1.105 1.3c-.175.207-.147.514.035.715a3.78 3.78 0 0 1 .374 4.596c-.148.227-.126.535.08.71zM6.847 10.995l-3.055-.986"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m9.766 16.385-1.254 2.933"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDonutBarChartTwoTone;
