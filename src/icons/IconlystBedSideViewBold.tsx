import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBedSideViewBold = ({
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
      d="M6.299 8.41c1.11 0 2.04.785 2.269 1.83h-2.3V8.41zm15.6 3.15a1.99 1.99 0 0 0-1.202-1.2 1.8 1.8 0 0 0-.43-.09V9.26a.75.75 0 0 0-1.5 0v.98h-8.692c-.248-1.874-1.837-3.33-3.776-3.33h-.031v-.17a.75.75 0 0 0-1.5 0v3.53a1.8 1.8 0 0 0-.427.09 2 2 0 0 0-1.207 1.204c-.116.331-.116.667-.116 1.336v.66c0 .648 0 1.005.118 1.34.204.563.643 1 1.202 1.2.189.068.388.096.644.108l-.192.893a.751.751 0 0 0 1.467.317l.257-1.198h12.008l.257 1.197a.751.751 0 0 0 1.467-.315l-.192-.894c.254-.012.453-.039.64-.108a1.99 1.99 0 0 0 1.207-1.203c.117-.33.117-.688.117-1.338V12.9c0-.67 0-1.006-.118-1.34"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBedSideViewBold;
