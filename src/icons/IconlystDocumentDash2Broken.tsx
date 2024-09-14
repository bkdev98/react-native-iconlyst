import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentDash2Broken = ({
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
      d="M19.628 11.997V9a2.05 2.05 0 0 0-.571-1.42l-3.792-3.95a2.05 2.05 0 0 0-1.48-.63h-5.65a3.747 3.747 0 0 0-3.761 3.658v5.338"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.27 5.953a2.56 2.56 0 0 0 2.554 2.561h2.74M4.37 15.273v1.894A3.763 3.763 0 0 0 8.048 21h2.403M19.632 15.273v1.894A3.826 3.826 0 0 1 15.974 21h-2.378"
    />
  </Svg>
);
export default IconlystDocumentDash2Broken;
