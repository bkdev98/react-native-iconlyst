import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageRecognitionOutline = ({
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
      d="M3 9.025c-.41 0-.75-.34-.75-.75v-1.58c0-2.56 2.08-4.64 4.64-4.64h1.29c.41 0 .75.34.75.75s-.34.75-.75.75H6.89c-1.73 0-3.14 1.41-3.14 3.14v1.58c0 .41-.34.75-.75.75M8.15 21.554H6.89c-2.56 0-4.64-2.08-4.64-4.64v-1.58c0-.41.34-.75.75-.75s.75.34.75.75v1.58c0 1.73 1.41 3.14 3.14 3.14h1.26c.41 0 .75.34.75.75s-.34.75-.75.75M17.11 21.554h-1.29c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.29c1.73 0 3.14-1.41 3.14-3.14v-1.58c0-.41.34-.75.75-.75s.75.34.75.75v1.58c0 2.56-2.08 4.64-4.64 4.64M21 9.025c-.41 0-.75-.34-.75-.75v-1.58c0-1.73-1.41-3.14-3.14-3.14h-1.26c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.26c2.56 0 4.64 2.08 4.64 4.64v1.58c0 .41-.34.75-.75.75M12 16.804c-2.53 0-4.8-1.75-6.06-4.69a.76.76 0 0 1 0-.59c1.26-2.94 3.53-4.69 6.06-4.69s4.8 1.75 6.06 4.69c.08.19.08.4 0 .59-1.26 2.94-3.53 4.69-6.06 4.69m-4.55-4.99c1.03 2.19 2.72 3.49 4.55 3.49s3.51-1.3 4.55-3.49c-1.03-2.19-2.72-3.49-4.55-3.49s-3.51 1.3-4.55 3.49"
    />
    <Path
      fill={props.color}
      d="M12 14.075c-1.24 0-2.26-1.01-2.26-2.26s1.01-2.26 2.26-2.26 2.26 1.01 2.26 2.26-1.01 2.26-2.26 2.26m0-3.01a.76.76 0 1 0 0 1.519.76.76 0 0 0 0-1.52"
    />
  </Svg>
);
export default IconlystImageRecognitionOutline;
