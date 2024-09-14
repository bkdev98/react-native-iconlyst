import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarRemoveLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.26 18.416.426-2.435a1.2 1.2 0 0 0-.354-1.075L3.37 12.064a1.211 1.211 0 0 1 .682-2.072l4.09-.589c.399-.056.746-.304.928-.664l1.83-3.654a1.24 1.24 0 0 1 2.202 0l2.157 4.336M7.773 21.274l3.656-1.895c.36-.186.787-.186 1.147 0l3.654 1.894a1.228 1.228 0 0 0 1.788-1.28l-.7-4.012c-.07-.396.063-.8.354-1.076l2.958-2.842a1.211 1.211 0 0 0-.682-2.072l-.947-.137M19.267 5.415 3.977 20.701"
    />
  </Svg>
);
export default IconlystStarRemoveLight;
