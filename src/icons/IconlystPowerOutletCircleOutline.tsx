import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletCircleOutline = ({
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
      d="M10.82 15.859v1.065a1.998 1.998 0 1 0 3.995 0V15.86zm-1.5 1.065v-1.27c0-.716.579-1.295 1.294-1.295h4.406c.715 0 1.294.58 1.294 1.294v1.271a3.498 3.498 0 0 1-6.995 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.816 18.922a.75.75 0 0 1 .75.75v1.826a.75.75 0 0 1-1.5 0v-1.826a.75.75 0 0 1 .75-.75M12.816 2.75a.75.75 0 0 1 .75.75v1.826a.75.75 0 0 1-1.5 0V3.5a.75.75 0 0 1 .75-.75M11.384 15.86a.75.75 0 0 1-.75-.75V12.98a.75.75 0 0 1 1.5 0v2.128a.75.75 0 0 1-.75.75m2.866 0a.75.75 0 0 1-.75-.75V12.98a.75.75 0 1 1 1.5 0v2.128a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.32 5.027a7.775 7.775 0 0 1 10.994 10.995.75.75 0 0 1-1.06-1.06 6.275 6.275 0 1 0-8.874 0 .75.75 0 1 1-1.06 1.06 7.775 7.775 0 0 1 0-10.995"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.336 10.531a.75.75 0 0 0 .75-.75v-.005a.75.75 0 1 0-1.5 0v.005c0 .414.336.75.75.75m2.96 0a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-1.5 0v.005c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerOutletCircleOutline;
