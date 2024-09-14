import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeBulk = ({
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
      d="M21.76 11.928a3.05 3.05 0 0 0-1.363-1.774c-.717-.433-1.731-.433-3.853-.433-.971 0-1.372-.411-1.034-1.604.443-1.605.876-4.635-.834-5.13-.76-.233-1.616.084-2.101.707-1.15 1.469-2.29 2.938-3.429 4.416a.46.46 0 0 0-.02.514q.208.358.324.76c.127.464.127.886.127 1.583V18.6c0 .512 0 .873-.05 1.21-.03.19.05.387.222.473a6.4 6.4 0 0 0 2.54.681c1.774.106 4.118.17 5.807-.01 1.246-.148 2.681-1.098 3.199-2.481.75-2.059.897-5.004.464-6.545"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.642 8.54c-.243-.063-.549-.063-1.15-.063-.602 0-.898 0-1.14.063a1.85 1.85 0 0 0-1.278 1.277C3 10.071 3 10.367 3 10.967V18.6c0 .602 0 .898.074 1.151a1.85 1.85 0 0 0 1.277 1.277c.243.064.539.064 1.14.064.602 0 .908 0 1.151-.064a1.85 1.85 0 0 0 1.277-1.277c.074-.253.074-.549.074-1.15v-7.633c0-.602 0-.897-.074-1.15A1.85 1.85 0 0 0 6.642 8.54"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThumbLikeBulk;
