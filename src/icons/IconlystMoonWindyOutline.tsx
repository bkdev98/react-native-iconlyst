import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonWindyOutline = ({
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
      d="M5.274 18.248c-.71 0-1.43-.19-2.05-.57a.75.75 0 0 1-.25-1.03c.21-.35.68-.47 1.03-.25.77.47 1.77.47 2.55 0 1.24-.76 2.86-.76 4.1 0a.75.75 0 0 1-.78 1.28c-.77-.47-1.77-.47-2.54 0-.62.38-1.34.57-2.05.57z"
    />
    <Path
      fill={props.color}
      d="M13.004 21.218c-1.17 0-2.35-.22-3.47-.68a9.15 9.15 0 0 1-5.01-4.97 9.2 9.2 0 0 1-.03-7.06 9.25 9.25 0 0 1 9.54-5.67c.3.03.59.28.68.56.1.31 0 .64-.25.85-2.31 1.92-3.11 5.19-1.95 7.97a.75.75 0 0 1-.4.98.75.75 0 0 1-.98-.4 8.46 8.46 0 0 1 1.18-8.48c-2.82.27-5.34 2.08-6.44 4.76a7.71 7.71 0 0 0 4.22 10.07c2.69 1.1 5.74.57 7.91-1.25-2.06-.21-4-1.19-5.4-2.77a.747.747 0 0 1 .06-1.06c.31-.28.78-.25 1.06.06a6.87 6.87 0 0 0 5.83 2.27c.31-.03.64.15.79.41.16.28.13.63-.07.88a9.27 9.27 0 0 1-7.28 3.52zm.86-16.9h.01z"
    />
    <Path
      fill={props.color}
      d="M20.454 9.318c-.54 0-1.07-.14-1.54-.43-.46-.28-1.06-.28-1.53 0a.75.75 0 0 1-.78-1.28c.94-.57 2.15-.57 3.08 0 .46.28 1.06.28 1.53 0 .35-.22.82-.1 1.03.25s.1.82-.25 1.03c-.47.28-1.01.43-1.54.43M11.234 13.358c-.54 0-1.07-.14-1.54-.43a.75.75 0 0 1 .78-1.28c.46.28 1.06.28 1.53 0 .94-.57 2.15-.57 3.08 0 .46.28 1.06.28 1.53 0 .94-.57 2.15-.57 3.08 0 .46.28 1.06.28 1.53 0 .36-.21.82-.1 1.03.25.22.35.1.82-.25 1.03-.94.57-2.15.57-3.08 0-.46-.28-1.06-.28-1.53 0-.94.57-2.15.57-3.08 0-.47-.28-1.07-.28-1.53 0-.47.28-1 .43-1.54.43z"
    />
  </Svg>
);
export default IconlystMoonWindyOutline;
