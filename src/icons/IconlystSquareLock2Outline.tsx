import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareLock2Outline = ({
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
      fillRule="evenodd"
      d="M5.087 5.887C4.41 6.613 4 7.677 4 8.993v7.947c0 1.318.409 2.38 1.084 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.107V8.993c0-1.318-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17M3.99 4.864c.985-1.056 2.387-1.647 4.042-1.647h8.435c1.66 0 3.062.59 4.046 1.647C21.49 5.915 22 7.365 22 8.993v7.947c0 1.628-.509 3.078-1.487 4.13-.984 1.056-2.387 1.647-4.047 1.647H8.032c-1.66 0-3.062-.591-4.046-1.648-.978-1.05-1.486-2.501-1.486-4.13V8.994c0-1.628.511-3.079 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.414 11.622a2.835 2.835 0 1 1 5.67 0c0 .735-.281 1.399-.736 1.898L14.84 15a1.634 1.634 0 0 1-1.549 2.151h-2.081a1.634 1.634 0 0 1-1.55-2.15l.493-1.48a2.8 2.8 0 0 1-.738-1.899m2.835-1.335c-.737 0-1.335.597-1.335 1.335 0 .436.212.822.548 1.07a.75.75 0 0 1 .267.84l-.646 1.943a.134.134 0 0 0 .126.176h2.081c.091 0 .155-.09.127-.175l-.646-1.945a.75.75 0 0 1 .268-.84 1.32 1.32 0 0 0 .545-1.069c0-.738-.597-1.335-1.335-1.335"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.251 3.217a.75.75 0 0 1 .75.75L13 9.535a.75.75 0 1 1-1.5 0l.001-5.568a.75.75 0 0 1 .75-.75m0 12.432a.75.75 0 0 1 .75.75v5.568a.75.75 0 1 1-1.5 0v-5.568a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareLock2Outline;
