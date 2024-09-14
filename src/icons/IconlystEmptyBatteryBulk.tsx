import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmptyBatteryBulk = ({
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
      d="M7.327 18.043h7.702c2.671 0 4.34-1.494 4.34-4.24v-3.526c0-2.79-1.669-4.319-4.34-4.319H7.335c-2.68 0-4.339 1.503-4.339 4.25v3.594c-.008 2.747 1.652 4.241 4.331 4.241"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.277 9.064a.75.75 0 0 1 .75-.75h.8c.795 0 1.496.233 1.97.82.444.553.574 1.285.574 2.03v1.708c0 .734-.13 1.46-.58 2.006-.474.578-1.174.804-1.964.804h-.792a.75.75 0 0 1 0-1.5h.792c.511 0 .708-.138.805-.256.124-.15.24-.455.24-1.054v-1.709c0-.612-.117-.93-.244-1.087-.099-.123-.295-.262-.8-.262h-.8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystEmptyBatteryBulk;
