import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServersConnectTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.717 10.784c0-1.075.871-1.946 1.946-1.946h11.675c1.075 0 1.946.871 1.946 1.946v1.965a1.946 1.946 0 0 1-1.946 1.946H6.663a1.946 1.946 0 0 1-1.946-1.946z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.717 4.927c0-1.074.871-1.946 1.946-1.946h11.675c1.075 0 1.946.872 1.946 1.946v1.965a1.946 1.946 0 0 1-1.946 1.946H6.663a1.946 1.946 0 0 1-1.946-1.946zM8.123 5.91h.487"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.123 11.767h.487"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.092 19.388c0 .89-.72 1.611-1.607 1.611a1.61 1.61 0 0 1-1.606-1.611c0-.89.719-1.612 1.606-1.612s1.607.722 1.607 1.612"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.09 19.389h4.634m-7.846 0H6.244"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.5 17.757v-3.043"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystServersConnectTwoTone;
