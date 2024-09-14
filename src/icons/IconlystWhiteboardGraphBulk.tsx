import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhiteboardGraphBulk = ({
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
      d="m16.49 9.58-3.14 3.14a.75.75 0 0 1-1.06 0l-1.55-1.56-2.17 2.18c-.15.15-.34.22-.53.22s-.39-.07-.53-.22c-.3-.29-.3-.77 0-1.06l2.7-2.71a.75.75 0 0 1 1.06 0l1.56 1.56 2.6-2.61c.3-.29.77-.29 1.06 0 .3.29.3.77 0 1.06M12.75 3v1.12h-1.5V3c0-.41.34-.75.75-.75s.75.34.75.75M16.2 21.54c-.15.14-.34.21-.53.21s-.39-.08-.53-.22L12 18.33l-3.14 3.2c-.29.29-.76.3-1.06.01a.767.767 0 0 1-.01-1.07l2.7-2.74h3.03l2.69 2.74c.29.3.28.78-.01 1.07"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.49 9.58-3.14 3.14a.75.75 0 0 1-1.06 0l-1.55-1.56-2.17 2.18c-.15.15-.34.22-.53.22s-.39-.07-.53-.22c-.3-.29-.3-.77 0-1.06l2.7-2.71a.75.75 0 0 1 1.06 0l1.56 1.56 2.6-2.61c.3-.29.77-.29 1.06 0 .3.29.3.77 0 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWhiteboardGraphBulk;
