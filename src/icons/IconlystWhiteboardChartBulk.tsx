import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhiteboardChartBulk = ({
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
      d="M16.64 4.121H7.36c-2.35 0-4.26 1.91-4.26 4.26v5.09c0 2.35 1.91 4.26 4.26 4.26h9.28c2.35 0 4.26-1.91 4.26-4.26v-5.09c0-2.35-1.91-4.26-4.26-4.26"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.87 9.9v3.31a.749.749 0 1 1-1.5 0V9.9a.749.749 0 1 1 1.5 0M12.75 8.24v4.97a.749.749 0 1 1-1.5 0V8.24a.749.749 0 1 1 1.5 0M16.63 10.64v2.57a.749.749 0 1 1-1.5 0v-2.57a.749.749 0 1 1 1.5 0M16.2 21.54c-.15.14-.34.21-.53.21s-.39-.08-.53-.22L12 18.33l-3.14 3.2c-.29.29-.76.3-1.06.01a.767.767 0 0 1-.01-1.07l2.7-2.74h3.03l2.69 2.74c.29.3.28.78-.01 1.07M12.75 3v1.12h-1.5V3c0-.41.34-.75.75-.75s.75.34.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.88 9.89c-.41 0-.75.34-.75.75v2.57a.749.749 0 1 0 1.5 0v-2.57c0-.41-.33-.75-.75-.75M12 7.49c-.41 0-.75.34-.75.75v4.97a.749.749 0 1 0 1.5 0V8.24c0-.41-.33-.75-.75-.75M8.12 9.15c-.41 0-.75.34-.75.75v3.31a.749.749 0 1 0 1.5 0V9.9c0-.41-.33-.75-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWhiteboardChartBulk;
