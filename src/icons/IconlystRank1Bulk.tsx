import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRank1Bulk = ({
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
      d="M10.582 7.613h3.835c.873 0 1.583-.71 1.583-1.583V4.102c0-.872-.71-1.582-1.583-1.582h-3.835C9.709 2.52 9 3.23 9 4.102V6.03c0 .873.709 1.583 1.582 1.583"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20 15.732h-3.35a.4.4 0 0 0-.4.4v3.02c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7.09c0-.64-.52-1.16-1.17-1.16h-2.16c-.65 0-1.17.52-1.17 1.16v7.09c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.02a.4.4 0 0 0-.4-.4H5c-1.1 0-2 .9-2 2v3.75a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-1.75c0-1.1-.9-2-2-2"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRank1Bulk;
