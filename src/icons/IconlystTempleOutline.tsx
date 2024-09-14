import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTempleOutline = ({
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
      d="M4.827 11.506a7.893 7.893 0 0 1 15.785 0 .75.75 0 0 1-1.5 0 6.392 6.392 0 0 0-12.785 0 .75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.722 2.25a.75.75 0 0 1 .75.75l-.001 1.362a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75M3.49 21a.75.75 0 0 1 .75-.75h16.962a.75.75 0 0 1 0 1.5H4.24a.75.75 0 0 1-.75-.75M3.49 11.504a.75.75 0 0 1 .75-.75h16.962a.75.75 0 0 1 0 1.5H4.24a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.578 10.754a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-9.496a.75.75 0 0 1 .75-.75m3.573 0a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-9.496a.75.75 0 0 1 .75-.75m3.57 0a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-9.496a.75.75 0 0 1 .75-.75m3.571 0a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-9.496a.75.75 0 0 1 .75-.75m3.57 0a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-9.496a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTempleOutline;
