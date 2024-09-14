import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuotationCloseOutline = ({
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
      d="M7.061 19.583a.74.74 0 0 1-.42-.13l-1.506-1.032a.75.75 0 0 1-.16-1.087c.52-.65.96-1.36 1.314-2.114a4.84 4.84 0 0 1-2.357-1.453 4.75 4.75 0 0 1-.985-4.528 4.57 4.57 0 0 1 3.16-3.145 4.77 4.77 0 0 1 5.028 1.8 6.56 6.56 0 0 1 .623 5.42 11.2 11.2 0 0 1-4.26 6.13.76.76 0 0 1-.437.14m-.434-1.957.412.282a9.83 9.83 0 0 0 3.271-4.993 5 5 0 0 0-.4-4.16 3.225 3.225 0 0 0-3.4-1.216 3.03 3.03 0 0 0-2.12 2.125 3.25 3.25 0 0 0 .667 3.106 3.38 3.38 0 0 0 2.327 1.111.75.75 0 0 1 .67 1.008 12 12 0 0 1-1.427 2.737M17.242 19.583a.75.75 0 0 1-.422-.13l-1.505-1.033a.75.75 0 0 1-.16-1.085c.52-.65.961-1.36 1.314-2.115a4.84 4.84 0 0 1-2.358-1.453 4.74 4.74 0 0 1-.984-4.527 4.57 4.57 0 0 1 3.16-3.146 4.76 4.76 0 0 1 5.026 1.8 6.55 6.55 0 0 1 .624 5.42 11.18 11.18 0 0 1-4.258 6.133.76.76 0 0 1-.437.136m-.434-1.957.411.282a9.82 9.82 0 0 0 3.271-4.993 5 5 0 0 0-.4-4.16 3.23 3.23 0 0 0-3.4-1.216 3.04 3.04 0 0 0-2.122 2.125 3.25 3.25 0 0 0 .668 3.106 3.37 3.37 0 0 0 2.327 1.111.75.75 0 0 1 .67 1.007c-.355.97-.834 1.89-1.425 2.738"
    />
  </Svg>
);
export default IconlystQuotationCloseOutline;
