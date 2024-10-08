import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneShieldOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.876 6.902a4.37 4.37 0 0 1 4.368-4.369h.81a.75.75 0 0 1 0 1.5h-.81a2.87 2.87 0 0 0-2.868 2.87l.001 10.762a2.87 2.87 0 0 0 2.867 2.867h5.516a2.867 2.867 0 0 0 2.867-2.868V13.2a.75.75 0 1 1 1.5 0v4.464a4.37 4.37 0 0 1-4.367 4.368H9.244a4.37 4.37 0 0 1-4.367-4.367z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.45 2.585c.103-.023.251-.052.389-.052.137 0 .285.03.388.052.12.026.257.062.4.103.288.082.627.192.957.309s.662.243.932.358c.134.058.263.117.372.174.081.043.239.127.36.249l.002.002c.136.137.253.308.315.55.05.19.057.4.058.596q.002.25-.007.65l-.004.208c-.006.373-.013.852-.013 1.474 0 1.597-.966 2.65-1.817 3.263a6.6 6.6 0 0 1-1.674.862l-.035.012-.01.003-.004.001h-.002s-.001.001-.218-.717l-.218.718h-.002l-.004-.002-.01-.003-.035-.011-.116-.04a6.56 6.56 0 0 1-1.559-.822c-.85-.613-1.816-1.666-1.816-3.264 0-.622-.007-1.101-.014-1.474l-.003-.211q-.01-.398-.008-.647c.001-.197.009-.406.058-.597a1.17 1.17 0 0 1 .319-.552c.12-.121.278-.205.359-.248.109-.057.237-.116.371-.173.27-.116.602-.242.932-.359s.67-.227.957-.309a7 7 0 0 1 .4-.103m.389 8.097-.218.718a.75.75 0 0 0 .435 0zm0-.797a5 5 0 0 0 1.067-.581c.655-.472 1.193-1.13 1.193-2.046a85 85 0 0 1 .017-1.72 26 26 0 0 0 .005-.715 5 5 0 0 0-.196-.09 14 14 0 0 0-.84-.322c-.309-.109-.619-.209-.87-.28a5 5 0 0 0-.376-.094l-.067.013a5 5 0 0 0-.31.08c-.25.072-.56.173-.87.282-.31.11-.61.224-.84.322a5 5 0 0 0-.196.089l-.002.113c-.001.146.002.335.007.597l.004.225c.007.378.014.866.014 1.5 0 .917.538 1.575 1.193 2.046a5 5 0 0 0 1.067.58M10.991 17.536a1.011 1.011 0 1 1 2.022 0 1.011 1.011 0 0 1-2.022 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneShieldOutline;
