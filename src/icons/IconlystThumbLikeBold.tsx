import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeBold = ({
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
      d="M21.26 11.928a3.05 3.05 0 0 0-1.363-1.774c-.718-.433-1.731-.433-3.853-.433-.971 0-1.372-.411-1.034-1.604.443-1.605.876-4.635-.834-5.13-.76-.233-1.616.084-2.101.707A783 783 0 0 0 8.646 8.11a.46.46 0 0 0-.02.514q.208.358.324.76c.127.464.127.886.127 1.583V18.6c0 .512 0 .873-.051 1.21-.028.19.051.387.223.473a6.4 6.4 0 0 0 2.54.681c1.774.106 4.118.17 5.807-.01 1.246-.148 2.681-1.098 3.199-2.481.75-2.059.897-5.004.464-6.545M6.142 8.54c-.243-.064-.549-.064-1.15-.064-.602 0-.898 0-1.14.063a1.85 1.85 0 0 0-1.278 1.278c-.074.253-.074.549-.074 1.15V18.6c0 .602 0 .897.074 1.15a1.85 1.85 0 0 0 1.277 1.278c.243.063.539.063 1.14.063.602 0 .908 0 1.151-.063a1.85 1.85 0 0 0 1.277-1.277c.074-.254.074-.55.074-1.151v-7.633c0-.601 0-.897-.074-1.15a1.85 1.85 0 0 0-1.277-1.278"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThumbLikeBold;
