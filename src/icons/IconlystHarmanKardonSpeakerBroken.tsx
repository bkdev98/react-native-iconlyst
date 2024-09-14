import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHarmanKardonSpeakerBroken = ({
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
      d="M19.474 9.327C19.483 5.304 18.925 3 12.014 3 5.11 3 4.524 5.304 4.524 9.327v5.346c0 4.023.576 6.327 7.488 6.327s7.47-2.304 7.461-6.327v-1.944"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.525 14.856q7.476 2.822 14.95 0M8.313 5.887c-.333.21-.522.466-.522.73 0 .831 1.89 1.517 4.212 1.517s4.212-.686 4.212-1.517c0-.264-.18-.52-.522-.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.873 16.015a3.5 3.5 0 0 1 3.123-1.9c1.36 0 2.547.766 3.132 1.9"
    />
  </Svg>
);
export default IconlystHarmanKardonSpeakerBroken;
