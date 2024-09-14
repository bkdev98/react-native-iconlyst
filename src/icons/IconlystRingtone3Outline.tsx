import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtone3Outline = ({
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
      d="M17.196 18.951h-9.89a2.812 2.812 0 0 1-2.545-4.009l.42-.9a4.06 4.06 0 0 0 .385-1.718v-1.188a6.684 6.684 0 0 1 13.367 0v1.192c0 .594.131 1.18.383 1.718l.422.9a2.81 2.81 0 0 1-2.544 4.01zm-4.945-13a5.19 5.19 0 0 0-5.184 5.183v1.192c-.001.815-.181 1.62-.527 2.357l-.42.894a1.312 1.312 0 0 0 1.187 1.871h9.89a1.312 1.312 0 0 0 1.187-1.87l-.421-.895a5.6 5.6 0 0 1-.527-2.358v-1.188a5.19 5.19 0 0 0-5.185-5.184z"
    />
    <Path
      fill={props.color}
      d="M12.25 21.752a3.555 3.555 0 0 1-3.55-3.55.75.75 0 0 1 1.5 0 2.05 2.05 0 0 0 4.1 0 .75.75 0 0 1 1.5 0 3.555 3.555 0 0 1-3.55 3.55M13.85 6.167a.75.75 0 0 1-.75-.75v-.814a.854.854 0 1 0-1.708 0v.81a.75.75 0 1 1-1.5 0v-.81a2.355 2.355 0 0 1 4.709 0v.81a.75.75 0 0 1-.75.754"
    />
  </Svg>
);
export default IconlystRingtone3Outline;
