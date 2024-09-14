import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClipboardAddOutline = ({
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
      fillRule="evenodd"
      d="M9.927 3.75a.606.606 0 0 0-.607.606v.573c0 .335.272.607.607.607h4.646a.606.606 0 0 0 .607-.607v-.573a.606.606 0 0 0-.607-.606zm-2.107.606c0-1.163.943-2.106 2.107-2.106h4.646c1.164 0 2.107.943 2.107 2.106v.573a2.106 2.106 0 0 1-2.107 2.107H9.927A2.106 2.106 0 0 1 7.82 4.929z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.571 5.344a3.005 3.005 0 0 0-3.005 3.004v8.898a3.005 3.005 0 0 0 3.005 3.004h7.36a3.005 3.005 0 0 0 3.004-3.004V8.348a3.005 3.005 0 0 0-3.005-3.004.75.75 0 1 1 0-1.5 4.505 4.505 0 0 1 4.505 4.504v8.898a4.505 4.505 0 0 1-4.505 4.504H8.571a4.505 4.505 0 0 1-4.505-4.504V8.348a4.505 4.505 0 0 1 4.505-4.504.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 10.438a.75.75 0 0 1 .75.75v1.454h1.454a.75.75 0 0 1 0 1.5H13v1.455a.75.75 0 1 1-1.5 0v-1.455h-1.455a.75.75 0 0 1 0-1.5H11.5v-1.454a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClipboardAddOutline;
