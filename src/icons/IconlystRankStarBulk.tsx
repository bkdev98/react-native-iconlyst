import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRankStarBulk = ({
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
      d="m10.124 7.012-.25 1.426a.937.937 0 0 0 1.356.979l1.243-.672 1.292.67a.95.95 0 0 0 .583.096.94.94 0 0 0 .774-1.08l-.27-1.354 1.052-1.01a.928.928 0 0 0-.519-1.587l-1.401-.172-.647-1.294-.004-.007a.94.94 0 0 0-1.67.006l-.602 1.26-1.443.207a.94.94 0 0 0-.547.277.934.934 0 0 0 .024 1.315z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.56 16.03h-3.09a.4.4 0 0 0-.4.4v2.73c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75v-6.7c0-.53-.42-.96-.95-.96h-2.24c-.53 0-.95.43-.95.96v6.7c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-4.61a.4.4 0 0 0-.4-.4H5.44c-1.05 0-1.91.85-1.91 1.91v3.52c0 1.06.86 1.92 1.91 1.92h14.12c1.05 0 1.91-.86 1.91-1.92v-1.64c0-1.05-.86-1.91-1.91-1.91"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRankStarBulk;
