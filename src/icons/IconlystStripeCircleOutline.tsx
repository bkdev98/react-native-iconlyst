import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStripeCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.586 9.128c-.305-.216-.86-.394-1.457-.377-.504.014-.91.145-1.17.34-.234.175-.388.424-.388.824 0 .374.243.718.702.955l2.07.892.04.019c.776.39 1.546 1.163 1.546 2.304 0 .88-.382 1.57-.988 2.024-.58.434-1.316.62-2.028.64-.867.024-1.753-.22-2.365-.652a.75.75 0 1 1 .866-1.225c.305.216.86.394 1.457.377.504-.014.91-.146 1.17-.34.234-.175.388-.424.388-.824 0-.374-.243-.718-.702-.955l-2.07-.892-.04-.019c-.775-.39-1.546-1.163-1.546-2.304 0-.88.382-1.57.988-2.024.58-.434 1.316-.62 2.028-.64.867-.024 1.753.22 2.365.652a.75.75 0 1 1-.866 1.225"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStripeCircleOutline;
