import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServersConnectLight = ({
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
      d="M4.217 10.784c0-1.075.871-1.946 1.946-1.946h11.675c1.075 0 1.946.871 1.946 1.946v1.965a1.946 1.946 0 0 1-1.946 1.946H6.163a1.946 1.946 0 0 1-1.946-1.946zM4.217 4.927c0-1.074.871-1.946 1.946-1.946h11.675c1.075 0 1.946.872 1.946 1.946v1.965a1.946 1.946 0 0 1-1.946 1.946H6.163a1.946 1.946 0 0 1-1.946-1.946zM7.623 5.91h.487M7.623 11.767h.487"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.592 19.388c0 .89-.72 1.611-1.607 1.611a1.61 1.61 0 0 1-1.606-1.611c0-.89.719-1.612 1.606-1.612s1.607.722 1.607 1.612"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.59 19.389h4.634m-7.846 0H5.744"
    />
    <Path stroke={props.color} strokeWidth={1.5} d="M12 17.757v-3.043" />
  </Svg>
);
export default IconlystServersConnectLight;
