import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowLeftOutline = ({
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
      d="M7.53 7.47a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H12a.75.75 0 1 0 0-1.5H4.81l2.72-2.72a.75.75 0 0 0 0-1.06M21.75 12a.75.75 0 0 0-.75-.75h-.01a.75.75 0 0 0 0 1.5H21a.75.75 0 0 0 .75-.75M15.75 12a.75.75 0 0 0-.75-.75h-.01a.75.75 0 0 0 0 1.5H15a.75.75 0 0 0 .75-.75M18.75 12a.75.75 0 0 0-.75-.75h-.01a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowLeftOutline;
