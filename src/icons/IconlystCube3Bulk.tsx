import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube3Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M12.75 10.396a.3.3 0 0 0 .45.26l6.285-3.607c.168-.096.202-.326.054-.45q-.179-.153-.386-.27l-5.684-3.28a3 3 0 0 0-.349-.174c-.182-.076-.37.068-.37.265zM20.621 8.87q0-.15-.019-.3c-.024-.198-.245-.292-.419-.193l-6.222 3.573a.3.3 0 0 0 0 .52l6.212 3.565c.17.097.386.009.416-.184q.031-.207.032-.42zM13.2 13.762a.3.3 0 0 0-.45.26v7.138c0 .197.188.34.37.265q.178-.074.347-.172l5.683-3.279q.156-.089.297-.196c.159-.12.128-.356-.044-.455z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.25 14.023a.3.3 0 0 0-.45-.26l-6.203 3.56c-.172.1-.203.336-.044.456q.14.106.294.194l5.684 3.28q.17.099.35.174c.182.075.37-.069.37-.266zM3.818 8.379c-.173-.1-.396-.005-.42.194a3 3 0 0 0-.02.298v6.56q0 .214.033.42c.03.194.246.282.416.185l6.213-3.565a.3.3 0 0 0 0-.52zM10.8 10.657a.3.3 0 0 0 .45-.26V3.14c0-.197-.187-.34-.37-.265q-.177.075-.347.173L4.85 6.327q-.209.119-.389.272c-.148.125-.113.355.055.451z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCube3Bulk;
