import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLike3Broken = ({
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
      d="M3 16.071v2.321c0 .663 0 .994.127 1.248.116.233.305.422.539.54.253.125.585.125 1.247.125h.231c.994 0 1.491 0 1.872-.19a1.8 1.8 0 0 0 .808-.808c.19-.38.19-.878.19-1.872v-5.792c0-.993 0-1.49-.19-1.87a1.8 1.8 0 0 0-.808-.809c-.381-.19-.878-.19-1.872-.19h-.231c-.662 0-.994 0-1.247.126a1.2 1.2 0 0 0-.539.54C3 9.692 3 10.023 3 10.686v2.05M5.357 17.9v-.01M16.693 20.258c.636 0 .955 0 1.252-.077.273-.071.532-.19.765-.351.252-.174.46-.415.877-.897l.482-.556c.34-.395.512-.592.634-.815.113-.205.195-.427.244-.656.053-.25.053-.51.053-1.031v-2.238c0-1.215 0-1.822-.233-2.288a2.2 2.2 0 0 0-.988-.987c-.465-.233-1.073-.233-2.286-.233h-3.595M8.014 18.8l2.806 1.164c.26.108.39.162.525.2q.186.052.379.075c.139.017.28.017.56.017h1.092M8.014 9.98c1.373 0 3.456-1.449 4.266-5.095.104-.467.217-.929.713-1.117.34-.129.788-.062 1.138.01 1.335.274 2.365 1.942.852 6.301"
    />
  </Svg>
);
export default IconlystThumbLike3Broken;
