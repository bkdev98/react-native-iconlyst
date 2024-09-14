import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketRemoveLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.906 18.589-.95.95c-.631.63-.947.946-1.279 1.13a2.68 2.68 0 0 1-2.587 0c-.332-.184-.647-.5-1.278-1.13-.137-.138-.206-.206-.238-.254-.117-.173-.119-.18-.1-.388.006-.057.064-.256.18-.654.15-.513.034-1.09-.357-1.51l-.034-.033a1.56 1.56 0 0 0-1.578-.39c-.367.113-.55.17-.608.176-.203.021-.224.016-.394-.097-.048-.032-.116-.1-.251-.235-.633-.632-.95-.948-1.134-1.281a2.68 2.68 0 0 1-.001-2.586c.183-.333.5-.65 1.132-1.282l6.54-6.54c.634-.633.951-.95 1.285-1.134a2.68 2.68 0 0 1 2.58 0c.335.184.652.5 1.285 1.135.137.136.205.204.237.253.113.169.119.191.097.394-.006.058-.063.242-.178.61a1.55 1.55 0 0 0 .387 1.577 1.56 1.56 0 0 0 1.58.39c.368-.114.553-.171.61-.178.203-.021.225-.016.394.098.049.032.117.1.253.236.634.634.95.95 1.134 1.284a2.68 2.68 0 0 1 0 2.582c-.183.334-.5.65-1.134 1.284l-.865.865M15.947 17.336h2.843"
    />
    <Circle
      cx={17.368}
      cy={17.335}
      r={3.667}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.395 9.55 1.763 1.764M9.635 5.813l1.737 1.737"
    />
  </Svg>
);
export default IconlystTicketRemoveLight;
