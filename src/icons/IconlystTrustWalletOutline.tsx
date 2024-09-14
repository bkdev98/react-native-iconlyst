import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrustWalletOutline = ({
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
      d="M12.25 3.75A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25A8.25 8.25 0 0 0 20.5 12a8.25 8.25 0 0 0-8.25-8.25M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.774 6.924a.75.75 0 0 1 .962 0c1.388 1.16 2.971 1.153 3.609 1.15l.087-.001a.75.75 0 0 1 .75.761c-.031 2.011-.113 3.457-.274 4.524-.16 1.065-.411 1.824-.83 2.406-.424.588-.966.917-1.507 1.216l-.286.156c-.471.256-.983.534-1.592.973a.75.75 0 0 1-.876 0c-.61-.439-1.12-.716-1.591-.972l-.288-.157c-.54-.3-1.082-.629-1.505-1.217-.418-.582-.667-1.341-.827-2.406s-.24-2.512-.268-4.523a.75.75 0 0 1 .75-.761h.085c.624.004 2.209.012 3.601-1.15M8.852 9.56c.036 1.598.112 2.738.238 3.574.144.963.343 1.45.561 1.754.215.298.498.494 1.014.78l.26.142c.371.201.82.445 1.33.78.51-.336.959-.58 1.33-.78l.26-.143c.517-.285.8-.482 1.015-.78.22-.303.42-.791.565-1.754.126-.836.204-1.975.242-3.573-.838-.049-2.15-.259-3.413-1.12-1.26.859-2.569 1.07-3.402 1.12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrustWalletOutline;
