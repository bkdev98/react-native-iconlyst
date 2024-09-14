import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxShop1Bold = ({
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
      d="M12.36 6.706c0-.41.34-.75.75-.75h1.55a.749.749 0 1 1 0 1.5h-1.55c-.41 0-.75-.33-.75-.75m-.54 6.34 4.11.01c1.67 0 2.83-1.2 2.84-2.93v-3.87c.01-1.76-1.13-2.95-2.82-2.97h-4.1c-.76-.01-1.5.26-2.01.77-.53.53-.83 1.3-.83 2.17L9 10.096c0 .87.29 1.64.82 2.17.51.51 1.2.78 2 .78"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.95 7.748a.75.75 0 0 0-.85.635l-.923 6.381a1.01 1.01 0 0 1-.994.857H8.57c-.52 0-.962-.406-1.005-.924l-.937-11.16a.75.75 0 0 0-.62-.676l-2.024-.35a.75.75 0 0 0-.255 1.479l1.453.251.888 10.581a2.52 2.52 0 0 0 2.5 2.299h10.614a2.51 2.51 0 0 0 2.478-2.143l.924-6.38a.75.75 0 0 0-.635-.85M8.144 19.04c-.679 0-1.23.552-1.23 1.23a1.232 1.232 0 0 0 2.462 0c0-.678-.553-1.23-1.232-1.23M19.168 19.04c-.679 0-1.231.552-1.231 1.23a1.232 1.232 0 0 0 2.463 0c0-.678-.553-1.23-1.232-1.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxShop1Bold;
