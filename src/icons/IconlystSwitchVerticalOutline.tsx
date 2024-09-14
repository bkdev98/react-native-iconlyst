import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwitchVerticalOutline = ({
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
      d="M15.573 5.435a.75.75 0 0 1 1.06 0l2.898 2.896a.75.75 0 0 1-1.06 1.06l-1.618-1.616v10.257a.75.75 0 0 1-1.5 0V7.776l-1.616 1.616a.75.75 0 0 1-1.06-1.061zM7.897 5.215a.75.75 0 0 1 .75.75v10.256l1.616-1.616a.75.75 0 0 1 1.06 1.06l-2.895 2.898a.75.75 0 0 1-1.061 0L4.47 15.665a.75.75 0 1 1 1.06-1.06l1.617 1.616V5.965a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwitchVerticalOutline;
