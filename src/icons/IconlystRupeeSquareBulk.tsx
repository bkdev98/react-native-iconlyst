import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRupeeSquareBulk = ({
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
      d="M16.217 2.563H7.782c-3.16 0-5.282 2.222-5.282 5.53v7.95c0 3.302 2.122 5.52 5.282 5.52h8.434c3.16 0 5.284-2.218 5.284-5.52v-7.95c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.517 10.572a.75.75 0 0 0-.75-.75h-1.349a3 3 0 0 0-.3-.699h1.65a.75.75 0 0 0 0-1.5H9.528a.75.75 0 0 0 0 1.5h.983c.538 0 1.011.279 1.286.7H9.53a.75.75 0 0 0 0 1.499h2.368a1.54 1.54 0 0 1-1.384.881H9.53a.748.748 0 0 0-.53 1.28l3.273 3.27a.751.751 0 0 0 1.061 0 .75.75 0 0 0 0-1.061l-2.083-2.08a3.05 3.05 0 0 0 2.22-2.29h1.296a.75.75 0 0 0 .75-.75"
    />
  </Svg>
);
export default IconlystRupeeSquareBulk;
