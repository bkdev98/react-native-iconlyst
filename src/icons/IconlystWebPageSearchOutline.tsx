import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageSearchOutline = ({
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
      d="M7.344 6.55c0 .41-.336.75-.75.75h-.056a.753.753 0 0 1-.75-.75c0-.41.336-.75.75-.75h.056c.414 0 .75.34.75.75M9.831 6.55c0 .41-.335.75-.75.75h-.055a.753.753 0 0 1-.75-.75.75.75 0 0 1 .75-.75h.055c.415 0 .75.34.75.75M12.317 6.55c0 .41-.336.75-.75.75h-.055a.75.75 0 0 1-.75-.75c0-.41.335-.75.75-.75h.055c.414 0 .75.34.75.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.25 12.83a.746.746 0 0 1-.75-.75v-1.84H4v5.73c0 1.32.409 2.38 1.085 3.11.418.45.96.794 1.623.99.398.116.84.18 1.324.18h1.751c.414 0 .75.34.75.75s-.336.75-.75.75H8.032c-1.659 0-3.062-.59-4.045-1.65-.979-1.05-1.487-2.5-1.487-4.13V8.03c0-1.63.511-3.08 1.49-4.13.985-1.06 2.387-1.65 4.042-1.65h8.436c1.659 0 3.062.59 4.045 1.65C21.492 4.95 22 6.4 22 8.03v4.05c0 .42-.336.75-.75.75M4 8.74h16.5v-.71c0-1.32-.409-2.38-1.085-3.11-.67-.72-1.658-1.17-2.947-1.17H8.032c-1.284 0-2.273.45-2.945 1.17C4.41 5.65 4 6.71 4 8.03z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.808 21.53a.757.757 0 0 1-1.06 0l-1.275-1.27a4.004 4.004 0 0 1-5.059-.48 3.99 3.99 0 0 1 .001-5.64 3.983 3.983 0 0 1 5.639 0 3.99 3.99 0 0 1 .48 5.06l1.274 1.27a.75.75 0 0 1 0 1.06m-6.333-2.81a2.49 2.49 0 0 0 3.518 0 2.49 2.49 0 0 0 0-3.52 2.49 2.49 0 0 0-3.518 0 2.49 2.49 0 0 0 0 3.52"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageSearchOutline;
