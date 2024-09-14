import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesPlusOutline = ({
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
      fill={props.color}
      d="M12.525 22.173a9.7 9.7 0 0 1-4.07-.892 3.2 3.2 0 0 0-.98-.3 3.9 3.9 0 0 0-1.052.267c-.765.263-1.812.624-2.57-.134s-.411-1.76-.136-2.565c.138-.343.227-.703.264-1.071a3.2 3.2 0 0 0-.3-1 9.83 9.83 0 0 1 1.969-11 9.735 9.735 0 0 1 13.79 0 9.776 9.776 0 0 1-6.916 16.69zm-5.053-2.69a4.2 4.2 0 0 1 1.597.43 8.275 8.275 0 0 0 9.31-13.372 8.234 8.234 0 0 0-11.665 0 8.34 8.34 0 0 0-1.655 9.345c.24.499.384 1.04.422 1.593a5 5 0 0 1-.344 1.554c-.1.278-.316.928-.221 1.023s.74-.13 1.017-.225a5 5 0 0 1 1.539-.348"
    />
    <Path
      fill={props.color}
      d="M12.545 15.738a.75.75 0 0 1-.75-.75v-1.842H9.969a.75.75 0 1 1 0-1.5h1.826V9.805a.75.75 0 0 1 1.5 0v1.836h1.826a.75.75 0 0 1 0 1.5h-1.826v1.842a.75.75 0 0 1-.75.755"
    />
  </Svg>
);
export default IconlystMessagesPlusOutline;
