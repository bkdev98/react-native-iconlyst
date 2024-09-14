import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotificationBoldsharp = ({
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
      d="M12.252 20.375a2.41 2.41 0 0 1-2.39-2.143h4.778a2.41 2.41 0 0 1-2.389 2.143m8.518-2.143-1.832-4.928V8.813c0-3.688-3-6.688-6.687-6.688-3.689 0-6.689 3-6.689 6.688v4.491L3.73 18.232h4.632c.143 2.03 1.823 3.643 3.89 3.643 2.064 0 3.744-1.613 3.888-3.643z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotificationBoldsharp;
