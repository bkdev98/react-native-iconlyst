import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLike3TwoTone = ({
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
      d="M5.644 8.773h-.23c-.663 0-.995 0-1.249.127a1.2 1.2 0 0 0-.538.539c-.127.254-.127.585-.127 1.248v7.705c0 .663 0 .994.127 1.248.116.233.305.422.538.539.254.127.586.127 1.248.127h.231c.994 0 1.49 0 1.872-.19.35-.176.633-.46.808-.809.19-.38.19-.878.19-1.871v-5.793c0-.994 0-1.49-.19-1.871a1.8 1.8 0 0 0-.808-.808c-.381-.19-.878-.19-1.872-.19"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.857 17.9v-.01"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.514 18.803 2.806 1.163c.26.107.39.161.524.2q.188.052.38.075c.139.016.28.016.56.016h4.408c.637 0 .956 0 1.253-.077.273-.07.533-.19.765-.35.252-.174.46-.415.877-.897l.481-.556c.341-.395.512-.592.634-.815q.17-.31.245-.657c.053-.248.053-.51.053-1.03v-2.238c0-1.215 0-1.822-.233-2.288a2.2 2.2 0 0 0-.987-.987c-.466-.233-1.073-.233-2.288-.233h-3.595"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.514 9.98c1.373 0 3.455-1.45 4.266-5.095.104-.467.217-.93.712-1.117.341-.129.789-.062 1.139.01 1.334.274 2.364 1.942.852 6.301"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystThumbLike3TwoTone;
