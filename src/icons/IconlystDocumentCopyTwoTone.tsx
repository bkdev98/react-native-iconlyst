import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentCopyTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.854 7.063c.432 0 .845.176 1.145.487l2.935 3.058c.285.296.443.69.443 1.1v6.322A2.95 2.95 0 0 1 13.545 21l-6.137-.001a2.906 2.906 0 0 1-2.842-2.969V9.894a2.9 2.9 0 0 1 2.912-2.831z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.376 16.937h1.23a2.94 2.94 0 0 0 2.83-2.97V7.65c0-.41-.15-.81-.44-1.1l-2.93-3.06c-.3-.309-.72-.489-1.15-.489h-4.379a2.896 2.896 0 0 0-2.91 2.829v1.23"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.71 3.047v2.556a2.26 2.26 0 0 0 2.257 2.263h2.422M11.648 7.11v2.555a2.263 2.263 0 0 0 2.257 2.264h2.42"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDocumentCopyTwoTone;
