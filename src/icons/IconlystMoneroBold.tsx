import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneroBold = ({
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
      d="M5.63 14.91a.3.3 0 0 0 .3-.3V8.2a.75.75 0 0 1 1.28-.53l4.578 4.578a.3.3 0 0 0 .424 0L16.8 7.67a.749.749 0 0 1 1.28.531v6.41a.3.3 0 0 0 .3.3h2.82a.3.3 0 0 0 .3-.3V8.03c0-3.308-2.123-5.53-5.283-5.53H7.782C4.622 2.5 2.5 4.722 2.5 8.03v6.58a.3.3 0 0 0 .3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.33 16.41a.75.75 0 0 1-.75-.75v-4.929a.3.3 0 0 0-.512-.212l-3.538 3.532a.75.75 0 0 1-1.06 0l-3.528-3.528a.3.3 0 0 0-.512.212v4.925a.75.75 0 0 1-.75.75H2.855a.29.29 0 0 0-.293.318c.304 2.878 2.313 4.772 5.22 4.772h8.434c2.908 0 4.917-1.894 5.221-4.772a.29.29 0 0 0-.292-.318z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneroBold;
