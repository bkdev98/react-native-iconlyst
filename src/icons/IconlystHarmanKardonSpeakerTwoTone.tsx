import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHarmanKardonSpeakerTwoTone = ({
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
      d="M5.025 9.327C5.025 5.304 5.61 3 12.513 3c6.912 0 7.47 2.304 7.461 6.327v5.346c.009 4.023-.549 6.327-7.46 6.327-6.913 0-7.489-2.304-7.489-6.327z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.025 14.856q7.476 2.822 14.95 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.813 5.887c-.333.21-.522.466-.522.73 0 .831 1.89 1.517 4.212 1.517s4.212-.686 4.212-1.517c0-.264-.18-.52-.523-.73M9.373 16.015a3.5 3.5 0 0 1 3.123-1.9c1.36 0 2.547.766 3.132 1.9"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHarmanKardonSpeakerTwoTone;
