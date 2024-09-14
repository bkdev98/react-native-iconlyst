import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEyeAiOutline = ({
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
      d="M12 19.855c-4.03 0-7.65-2.83-9.69-7.56a.76.76 0 0 1 0-.59c2.03-4.73 5.66-7.56 9.69-7.56s7.66 2.83 9.69 7.56c.08.19.08.4 0 .59-2.03 4.73-5.65 7.56-9.69 7.56m-8.18-7.85c1.81 3.98 4.85 6.35 8.18 6.35s6.37-2.37 8.18-6.35c-1.81-3.98-4.85-6.35-8.18-6.35s-6.37 2.37-8.18 6.35"
    />
    <Path
      fill={props.color}
      d="M10.3 14.475c-.31 0-.59-.2-.7-.49l-.09-.24c-.26-.7-.8-1.24-1.5-1.5l-.24-.09a.76.76 0 0 1-.49-.7c0-.31.2-.59.49-.7l.24-.09c.69-.26 1.24-.8 1.49-1.5l.09-.24c.11-.29.39-.49.7-.49s.59.2.7.49l.09.24c.26.7.8 1.24 1.5 1.5l.24.09c.29.11.49.39.49.7s-.2.59-.49.7l-.24.09c-.69.26-1.24.8-1.5 1.5l-.09.24c-.11.29-.39.49-.7.49zm-.67-3.02c.25.2.47.42.67.67.2-.25.42-.47.67-.67-.25-.2-.47-.42-.67-.67-.2.25-.42.47-.67.67M14.94 15.555c-.33 0-.62-.22-.72-.53a.8.8 0 0 0-.53-.53.75.75 0 0 1-.53-.72c0-.33.22-.62.53-.72.25-.08.45-.28.53-.53.1-.32.39-.53.72-.53s.62.22.72.53c.08.25.27.45.53.53.32.1.53.39.53.72s-.22.62-.53.72c-.25.08-.45.27-.53.53a.75.75 0 0 1-.72.53"
    />
  </Svg>
);
export default IconlystEyeAiOutline;
