import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLawnMowerBold = ({
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
      d="M19.02 19.906c-.69 0-1.24-.56-1.24-1.24s.55-1.23 1.24-1.23c.23 0 .45.07.64.18a1.235 1.235 0 0 1-.64 2.29m-3.32-4.06h-1.28a.749.749 0 1 1 0-1.5h1.28a.749.749 0 1 1 0 1.5m-7.32 4.06a2.158 2.158 0 0 1-.53-4.25c.02 0 .04-.01.06-.01.03-.01.06-.01.08-.03q.195-.03.39-.03c1.19 0 2.16.97 2.16 2.16s-.97 2.16-2.16 2.16M4.131 8.8l1.159-.616.51 2.05c.01.05.02.1.04.15l1 4.05c-.19.08-.36.18-.52.28L3.953 9.312a.4.4 0 0 1 .178-.51m16.649 7.785.17-1.75c.11-1.25-.73-2.4-1.95-2.68L7.16 9.496l-.65-2.61-.92-3.72a.75.75 0 0 0-.73-.57H3a.749.749 0 1 0 0 1.5h1.28l.64 2.58.001.006-1.494.795a1.905 1.905 0 0 0-.848 2.434l2.633 6.012-.002.003c-.31.53-.49 1.16-.49 1.82 0 2.02 1.64 3.66 3.66 3.66 1.56 0 2.9-.98 3.42-2.37h4.51a2.74 2.74 0 0 0 2.71 2.37c1.5 0 2.73-1.23 2.73-2.74 0-.84-.38-1.58-.97-2.08"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.645 8.608 6.696 1.52a.75.75 0 0 0 .332-1.463l-6.696-1.52a.75.75 0 0 0-.332 1.463"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLawnMowerBold;
