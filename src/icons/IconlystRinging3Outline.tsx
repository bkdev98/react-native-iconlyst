import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRinging3Outline = ({
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
      d="M17.332 18.393H7.17a2.87 2.87 0 0 1-2.6-4.092l.433-.919c.264-.555.4-1.161.4-1.776v-1.224a6.847 6.847 0 1 1 13.694 0v1.223a4.2 4.2 0 0 0 .4 1.776l.433.92a2.87 2.87 0 0 1-2.6 4.091zM12.251 5.035a5.354 5.354 0 0 0-5.347 5.348v1.224c0 .835-.185 1.659-.54 2.414l-.432.92a1.37 1.37 0 0 0 1.239 1.952h10.162a1.37 1.37 0 0 0 1.239-1.953l-.432-.92a5.7 5.7 0 0 1-.54-2.414v-1.223a5.354 5.354 0 0 0-5.349-5.348"
    />
    <Path
      fill={props.color}
      d="M12.25 5.036a.75.75 0 0 1-.75-.75V3A.75.75 0 1 1 13 3v1.286a.75.75 0 0 1-.75.75M4.686 7.23a.75.75 0 0 1-.682-1.062 7.94 7.94 0 0 1 2.337-2.926.75.75 0 1 1 .922 1.182 6.44 6.44 0 0 0-1.9 2.37.75.75 0 0 1-.677.437M19.812 7.23a.75.75 0 0 1-.681-.437 6.4 6.4 0 0 0-1.895-2.37.751.751 0 1 1 .922-1.181 7.9 7.9 0 0 1 2.336 2.927.75.75 0 0 1-.37 1 .8.8 0 0 1-.312.062M12.25 21.75a3.63 3.63 0 0 1-3.629-3.628.75.75 0 0 1 1.5 0 2.128 2.128 0 1 0 4.255 0 .75.75 0 1 1 1.5 0 3.63 3.63 0 0 1-3.627 3.628"
    />
  </Svg>
);
export default IconlystRinging3Outline;
