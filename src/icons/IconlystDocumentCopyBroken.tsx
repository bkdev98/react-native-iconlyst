import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentCopyBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.908 20.999a2.906 2.906 0 0 1-2.842-2.969V9.894a2.9 2.9 0 0 1 2.912-2.831h4.376c.432 0 .845.176 1.145.487l2.935 3.058c.285.296.443.69.443 1.1v6.322A2.95 2.95 0 0 1 13.045 21h-2.849"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.127 7.06V5.828A2.896 2.896 0 0 1 11.037 3h4.379c.43 0 .85.18 1.15.49l2.93 3.06c.29.29.44.69.44 1.099v6.318a2.93 2.93 0 0 1-.998 2.238"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.21 5.605a2.26 2.26 0 0 0 2.257 2.264h2.422M11.148 9.668a2.26 2.26 0 0 0 2.257 2.263h2.42"
    />
  </Svg>
);
export default IconlystDocumentCopyBroken;
