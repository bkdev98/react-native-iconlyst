import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperBagBold = ({
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
      d="M19.621 3.32H4.379c-1.036 0-1.879.867-1.879 1.934v1.827c0 1.066.843 1.933 1.879 1.933h15.242c1.036 0 1.879-.867 1.879-1.933V5.254c0-1.067-.843-1.934-1.879-1.934M14.64 14.87H9.36c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.28c.41 0 .75.34.75.75s-.34.75-.75.75m5.08-4.37H4.28c-.28 0-.5.23-.5.5v4.87c0 2.88 1.85 4.81 4.6 4.81h7.24c2.75 0 4.6-1.93 4.6-4.81V11c0-.27-.22-.5-.5-.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPaperBagBold;
