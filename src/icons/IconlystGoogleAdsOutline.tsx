import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAdsOutline = ({
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
      d="M9.867 4.796a.75.75 0 0 1 .275 1.024L4.037 16.395a2.137 2.137 0 0 0 3.702 2.137l3.53-6.113a.75.75 0 1 1 1.298.75l-3.53 6.113a3.637 3.637 0 0 1-6.3-3.637L8.844 5.07a.75.75 0 0 1 1.024-.274"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.858 5.82a2.137 2.137 0 0 0-3.702 2.136l6.105 10.575a2.137 2.137 0 0 0 3.702-2.138zm-3.67-2.082a3.637 3.637 0 0 1 4.969 1.331l6.105 10.574a3.637 3.637 0 1 1-6.3 3.638L8.857 8.706a3.637 3.637 0 0 1 1.331-4.968M2.738 15.643a3.637 3.637 0 1 1 6.3 3.637 3.637 3.637 0 0 1-6.3-3.637m4.218-.032a2.137 2.137 0 1 0-2.137 3.702 2.137 2.137 0 0 0 2.137-3.702"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleAdsOutline;
