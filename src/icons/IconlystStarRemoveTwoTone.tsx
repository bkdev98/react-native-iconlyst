import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarRemoveTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.76 18.416.426-2.435a1.2 1.2 0 0 0-.354-1.075L3.87 12.064a1.211 1.211 0 0 1 .682-2.072l4.09-.589c.399-.056.746-.304.928-.664l1.83-3.654a1.24 1.24 0 0 1 2.202 0l2.157 4.336"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.273 21.274 3.656-1.895c.36-.186.787-.186 1.147 0l3.654 1.894a1.228 1.228 0 0 0 1.788-1.28l-.7-4.012c-.07-.396.063-.8.354-1.076l2.958-2.842a1.211 1.211 0 0 0-.682-2.072l-.947-.137"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.767 5.415 4.477 20.701"
    />
  </Svg>
);
export default IconlystStarRemoveTwoTone;
