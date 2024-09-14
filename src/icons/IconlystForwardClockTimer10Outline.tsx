import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardClockTimer10Outline = ({
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
      d="M8.737 21.044a.7.7 0 0 1-.306-.067A9.711 9.711 0 1 1 20.847 7.362a.75.75 0 1 1-1.312.73A8.21 8.21 0 1 0 9.047 19.607a.75.75 0 0 1-.307 1.436z"
    />
    <Path
      fill={props.color}
      d="M20.519 8.477h-2.972a.75.75 0 0 1 0-1.5h2.223V4.738a.75.75 0 1 1 1.5 0v2.99a.75.75 0 0 1-.751.75M12.41 12.842H8.966a.75.75 0 0 1 0-1.5h2.7V7.91a.75.75 0 1 1 1.5 0v4.184a.75.75 0 0 1-.754.748M14.656 21.496a.75.75 0 0 1-.75-.75v-3.83l-.469.38a.75.75 0 0 1-.944-1.166l1.691-1.37a.75.75 0 0 1 1.222.584v5.406a.75.75 0 0 1-.75.746M19.678 21.607a2.48 2.48 0 0 1-2.479-2.48v-2.382a2.478 2.478 0 1 1 4.958 0v2.383a2.48 2.48 0 0 1-2.479 2.479m0-5.841a.98.98 0 0 0-.979.979v2.383a.98.98 0 0 0 1.958 0v-2.383a.98.98 0 0 0-.979-.98"
    />
  </Svg>
);
export default IconlystForwardClockTimer10Outline;
