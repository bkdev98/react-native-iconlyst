import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube3Bold = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.75 11.117a.3.3 0 0 0 .45.26l6.285-3.607c.168-.096.202-.326.054-.45q-.179-.152-.386-.27L13.47 3.77a3 3 0 0 0-.349-.174c-.182-.075-.37.068-.37.266zM3.818 9.1c-.173-.1-.396-.005-.42.193a3 3 0 0 0-.02.298v6.56q0 .213.033.421c.03.193.246.282.416.184l6.213-3.565a.3.3 0 0 0 0-.52zM20.621 9.591q0-.15-.019-.3c-.024-.198-.245-.292-.419-.193l-6.222 3.573a.3.3 0 0 0 0 .52l6.212 3.565c.17.098.386.01.416-.184a3 3 0 0 0 .032-.42zM13.2 14.484a.3.3 0 0 0-.45.26v7.137c0 .197.188.341.37.266q.178-.075.347-.173l5.683-3.278q.156-.09.297-.197c.159-.12.128-.356-.044-.455zM11.25 14.744a.3.3 0 0 0-.45-.26l-6.203 3.56c-.172.099-.202.336-.044.455q.14.106.294.195l5.684 3.279q.17.099.35.174c.182.075.37-.068.37-.265zM10.8 11.377a.3.3 0 0 0 .45-.26V3.861c0-.197-.187-.341-.37-.266q-.177.075-.347.173L4.85 7.048q-.209.118-.389.272c-.148.124-.113.354.055.45z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCube3Bold;
