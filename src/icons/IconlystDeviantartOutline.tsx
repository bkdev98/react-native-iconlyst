import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeviantartOutline = ({
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
      d="M14.435 2.346a.76.76 0 0 1 .626-.33h2.756c.657 0 1.19.532 1.19 1.19v3.467c0 .326-.099.646-.282.916l-2.917 4.293h2.008c.658 0 1.19.533 1.19 1.19v3.253a1.19 1.19 0 0 1-1.19 1.19h-5.69l-2.537 3.67a.76.76 0 0 1-.626.33H6.208a1.19 1.19 0 0 1-1.19-1.19v-3.467c0-.326.098-.645.281-.915l2.917-4.294H6.208a1.19 1.19 0 0 1-1.19-1.19V7.206c0-.657.532-1.19 1.19-1.19h5.69zm1.015 1.17-2.411 3.487a1.19 1.19 0 0 1-.98.513H6.519v2.633H9.3a.926.926 0 0 1 .766 1.446l-3.526 5.19a.13.13 0 0 0-.022.073v3.158h2.056l2.412-3.487a1.19 1.19 0 0 1 .978-.514h5.542v-2.633h-2.782a.926.926 0 0 1-.766-1.446l3.526-5.19a.13.13 0 0 0 .022-.073V3.516z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeviantartOutline;
