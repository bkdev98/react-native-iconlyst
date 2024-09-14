import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownloadOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.367 7.733a.75.75 0 0 1 0 1.5h-.94A2.927 2.927 0 0 0 3.5 12.157v4.885a2.94 2.94 0 0 0 2.935 2.935h11.14a2.93 2.93 0 0 0 2.925-2.925v-4.884a2.94 2.94 0 0 0-2.934-2.935h-.932a.75.75 0 0 1 0-1.5h.932A4.44 4.44 0 0 1 22 12.168v4.884a4.43 4.43 0 0 1-4.425 4.425H6.435A4.44 4.44 0 0 1 2 17.042v-4.885a4.43 4.43 0 0 1 4.426-4.424zM12.001 3a.75.75 0 0 1 .75.75v10.226l1.635-1.642a.749.749 0 1 1 1.062 1.06l-2.91 2.92a1 1 0 0 1-.091.08l.085-.074a.74.74 0 0 1-.398.21l-.019.002a1 1 0 0 1-.114.01l-.04-.004-.062-.004-.013-.002.115.01a.75.75 0 0 1-.53-.22l-.001-.002-2.916-2.927a.751.751 0 0 1 1.062-1.059l1.634 1.642.001-10.226a.75.75 0 0 1 .75-.75"
    />
  </Svg>
);
export default IconlystDownloadOutline;
