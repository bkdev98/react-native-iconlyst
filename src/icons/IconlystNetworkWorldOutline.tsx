import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNetworkWorldOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M12 21.75c-2.69 0-4.1-4.91-4.1-9.75S9.31 2.25 12 2.25s4.1 4.9 4.1 9.75-1.41 9.75-4.1 9.75m0-18c-1.06 0-2.6 3.21-2.6 8.25s1.54 8.25 2.6 8.25 2.6-3.21 2.6-8.25-1.54-8.25-2.6-8.25"
    />
    <Path
      fill={props.color}
      d="M12 9.72c-1.07 0-2.14-.06-3.2-.17-1.79-.19-3.48-.52-5-.99a.75.75 0 0 1-.5-.94c.12-.39.54-.62.94-.5 1.43.44 3.02.76 4.72.94 2.02.21 4.07.21 6.1 0 1.7-.18 3.28-.49 4.72-.94.4-.12.82.1.94.5s-.1.82-.5.94c-1.53.47-3.21.81-5 .99-1.07.11-2.14.17-3.21.17zM4.01 16.91a.75.75 0 0 1-.22-1.47c1.53-.47 3.21-.8 5-.99 2.12-.22 4.28-.22 6.41 0 1.79.19 3.47.52 5 .99.4.12.62.54.5.94a.75.75 0 0 1-.94.5c-1.44-.44-3.02-.76-4.72-.93a29.6 29.6 0 0 0-6.1 0c-1.69.18-3.28.49-4.72.93-.07.02-.15.03-.22.03z"
    />
  </Svg>
);
export default IconlystNetworkWorldOutline;
