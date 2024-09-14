import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOffice365Bulk = ({
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
      d="m19.594 4.133-5.153-1.61a.5.5 0 0 0-.323.007L4.381 6.11a.5.5 0 0 0-.327.47v9.079a.5.5 0 0 0 .706.456l3.347-1.51a.5.5 0 0 0 .294-.455V9.017a.3.3 0 0 1 .22-.289l4.755-1.316a.3.3 0 0 1 .38.29v9.01a.3.3 0 0 1-.299.3l-8.738.028a.5.5 0 0 0-.168.97l9.57 3.46a.5.5 0 0 0 .321.007l5.153-1.62a.5.5 0 0 0 .35-.477V4.61a.5.5 0 0 0-.35-.477"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystOffice365Bulk;
