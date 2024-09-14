import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletAddFundsOutline = ({
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
      d="M14.865 12a.75.75 0 0 1 .75-.75h.002a.75.75 0 0 1 0 1.5h-.002a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.953 4.836A3.953 3.953 0 0 0 4 8.79v6.432a3.95 3.95 0 0 0 3.953 3.945h6.845a3.95 3.95 0 0 0 3.954-3.945v-.817a.75.75 0 0 1 1.5 0v.817a5.45 5.45 0 0 1-5.454 5.445H7.953A5.45 5.45 0 0 1 2.5 15.222V8.79a5.453 5.453 0 0 1 5.453-5.454h6.845a5.454 5.454 0 0 1 5.454 5.454v.796a.75.75 0 0 1-1.5 0V8.79a3.954 3.954 0 0 0-3.954-3.954z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.226 10.344a1.11 1.11 0 0 0-1.11 1.11v1.098c0 .613.496 1.11 1.11 1.11h4.164a1.11 1.11 0 0 0 1.11-1.11v-1.098a1.11 1.11 0 0 0-1.11-1.11zm-2.61 1.11a2.61 2.61 0 0 1 2.61-2.61h4.164a2.61 2.61 0 0 1 2.61 2.61v1.098a2.61 2.61 0 0 1-2.61 2.61h-4.164a2.61 2.61 0 0 1-2.61-2.61zM5.822 12a.75.75 0 0 1 .75-.75h3.654a.75.75 0 0 1 0 1.5H6.572a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.396 9.422a.75.75 0 0 1 .75.75v3.654a.75.75 0 0 1-1.5 0v-3.654a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletAddFundsOutline;
