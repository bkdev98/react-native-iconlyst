import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentSignalsTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.36 20.709a4.026 4.026 0 0 1-4.026-4.025V7.145A4.026 4.026 0 0 1 8.36 3.12h6.935a4.026 4.026 0 0 1 4.025 4.026v6.152"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.657 10.717v2.593zm4.337-2.374v4.967zM12.347 21.12l2.667-2.868 3.043 1.976 2.61-2.787"
    />
  </Svg>
);
export default IconlystDocumentSignalsTwoTone;
