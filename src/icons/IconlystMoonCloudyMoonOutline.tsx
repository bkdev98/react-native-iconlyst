import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonCloudyMoonOutline = ({
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
      d="M16.536 22.258a.73.73 0 0 1-.68-.44c-.17-.38 0-.82.38-.99 1.79-.81 3.23-2.2 4.09-3.93-3.14.97-6.68.15-9.06-2.24-2.38-2.38-3.21-5.92-2.24-9.06a8.46 8.46 0 0 0-4.66 7.54c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.41 2.96-8.33 7.19-9.54.29-.08.66.03.85.26.21.25.24.6.09.89-1.54 2.89-.99 6.53 1.33 8.85s5.96 2.87 8.85 1.33c.26-.14.65-.11.89.08.25.2.36.53.28.84a9.93 9.93 0 0 1-5.48 6.34c-.1.05-.21.07-.31.07z"
    />
    <Path
      fill={props.color}
      d="M19.786 10.918h-4.35c-.33 0-.7-.07-1.02-.2a2.6 2.6 0 0 1-1.55-2.38c0-1.26.77-2.23 1.91-2.51.28-1.08 1.2-2.26 2.84-2.26s2.56 1.18 2.84 2.26c1.14.28 1.91 1.25 1.91 2.51 0 1.02-.6 1.94-1.52 2.36-.35.14-.72.22-1.05.22zm-2.18-5.85c-1.17 0-1.43 1.15-1.43 1.43 0 .41-.33.75-.74.75-.52 0-1.08.29-1.08 1.09 0 .43.25.82.64 1 .12.05.29.08.43.08h4.35c.05 0 .24 0 .46-.1.36-.16.62-.55.62-.98 0-.8-.56-1.09-1.08-1.09-.41 0-.74-.34-.74-.75 0-.28-.25-1.43-1.43-1.43M12.126 21.798h-1.83c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.83c.41 0 .75.34.75.75s-.34.75-.75.75m-4.87 0h-3.65c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.65c.41 0 .75.34.75.75s-.34.75-.75.75m3.04-3.39h-4.26c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.26c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystMoonCloudyMoonOutline;
