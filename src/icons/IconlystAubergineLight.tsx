import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAubergineLight = ({
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
      d="M3.16 10.168c1.612 5.54 10.728 13.988 16.424 8.615 2.33-2.198 2.188-6.977-1.613-8.088-3.773-1.103-6.447-1.533-9.368-4.14C6 4.234 2.148 6.689 3.16 10.169"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.866 6.678c-.541-.595-1.493-2.11-.974-3.407M8.913 6.933 8.63 8.399a.826.826 0 0 1-.81.67h-.876a.826.826 0 0 0-.826.826v.362c0 .456-.37.826-.825.826h-1.64"
    />
  </Svg>
);
export default IconlystAubergineLight;
