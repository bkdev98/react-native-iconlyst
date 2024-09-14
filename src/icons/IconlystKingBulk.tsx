import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKingBulk = ({
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
      d="M21.46 4.794a1.08 1.08 0 0 0-1.236.094L16.69 7.751l-3.377-3.798c-.413-.463-1.214-.464-1.628.001L8.31 7.751 4.775 4.889a1.08 1.08 0 0 0-1.238-.094c-.396.233-.6.675-.52 1.127.255 1.452.812 5.266 1.122 7.41a3.21 3.21 0 0 0 3.163 2.735h10.394a3.21 3.21 0 0 0 3.163-2.736c.31-2.145.87-5.962 1.124-7.41a1.08 1.08 0 0 0-.524-1.127"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.164 18.594H5.833c-.414 0-.75.403-.75.9 0 .498.336.901.75.901h13.33c.413 0 .75-.403.75-.9 0-.498-.337-.901-.75-.901"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKingBulk;
