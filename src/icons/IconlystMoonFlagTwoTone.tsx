import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonFlagTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.506 17.402c3.778-4.336 13.316-4.397 17.218 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.586 16.066 9.246 4.62M9.398 5.923c1.53.223 2.362.118 3.8-.445l.476 4.06c-1.446.59-2.248.695-3.8.445"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.157 6.392c-1.438.563-2.27.667-3.8.444l.476 4.06c1.552.25 2.354.146 3.8-.444l-1.01-1.929z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.029 19.878c0-.484.57-.877 1.273-.877"
      opacity={0.4}
    />
    <Ellipse
      cx={14.921}
      cy={17.993}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
      rx={1.463}
      ry={0.857}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.114 20.99V21M5.483 9.694v.01M18.658 3v.01"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMoonFlagTwoTone;
