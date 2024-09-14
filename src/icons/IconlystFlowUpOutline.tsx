import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowUpOutline = ({
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
      d="M12.328 2.25a.75.75 0 0 1 .53.22l4 4a.75.75 0 0 1-1.06 1.06l-2.72-2.72V12a.75.75 0 0 1-1.5 0V4.81l-2.72 2.72a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 .53-.22M12.328 14.24a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M12.328 17.24a.75.75 0 0 1 .75.75V18a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M12.328 20.24a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowUpOutline;
