import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomepodSpeakerBroken = ({
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
      d="M19.474 14.673c.01 4.023-.549 6.327-7.46 6.327-6.913 0-7.489-2.304-7.489-6.327V9.327C4.525 5.304 5.11 3 12.013 3c6.912 0 7.47 2.304 7.461 6.327v2.387"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.313 5.885c-.333.21-.522.466-.522.73 0 .831 1.89 1.517 4.211 1.517 2.323 0 4.212-.686 4.212-1.517 0-.264-.18-.52-.521-.73"
    />
  </Svg>
);
export default IconlystHomepodSpeakerBroken;
