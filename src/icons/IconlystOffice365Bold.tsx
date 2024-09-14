import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOffice365Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.594 4.642-5.153-1.61a.5.5 0 0 0-.323.007l-9.737 3.58a.5.5 0 0 0-.327.47v9.079a.5.5 0 0 0 .706.456l3.347-1.51a.5.5 0 0 0 .294-.455V9.526a.3.3 0 0 1 .22-.29l4.755-1.315a.3.3 0 0 1 .38.289v9.012a.3.3 0 0 1-.299.3l-8.738.027a.5.5 0 0 0-.168.97l9.57 3.46a.5.5 0 0 0 .321.007l5.153-1.62a.5.5 0 0 0 .35-.477V5.119a.5.5 0 0 0-.35-.477"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOffice365Bold;
