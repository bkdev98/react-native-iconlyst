import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomepodSpeakerTwoTone = ({
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
      d="M12.513 3C5.61 3 5.025 5.304 5.025 9.327v5.346c0 4.023.576 6.327 7.488 6.327s7.47-2.304 7.461-6.327V9.327C19.984 5.304 19.425 3 12.514 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.813 5.885c-.333.21-.522.466-.522.73 0 .831 1.89 1.517 4.211 1.517 2.323 0 4.212-.686 4.212-1.517 0-.264-.18-.52-.521-.73"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHomepodSpeakerTwoTone;
