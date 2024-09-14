import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRankStarBroken = ({
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
      d="M14.824 16.527h4.233c.781 0 1.415.634 1.415 1.415v1.643c0 .779-.637 1.415-1.415 1.415H8.791M9.176 14.645H4.943c-.781 0-1.415.633-1.415 1.414v3.526c0 .779.637 1.415 1.415 1.415H6.01M10.501 8.972l1.295-.671a.44.44 0 0 1 .406 0l1.294.67a.435.435 0 0 0 .633-.454l-.248-1.421a.42.42 0 0 1 .126-.38l1.048-1.007a.428.428 0 0 0-.242-.734l-1.448-.208a.44.44 0 0 1-.33-.236l-.646-1.294a.438.438 0 0 0-.78 0l-.649 1.294a.44.44 0 0 1-.328.236l-1.45.208a.43.43 0 0 0-.241.735l1.05 1.006"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.176 17.64V13c0-.778.636-1.414 1.415-1.414h2.818c.781 0 1.415.633 1.415 1.415v7.998"
    />
  </Svg>
);
export default IconlystRankStarBroken;
