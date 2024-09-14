import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftBulkcurved = ({
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
      d="M20.75 12a1 1 0 0 0-1-1h-15a1 1 0 1 0 0 2h15a1 1 0 0 0 1-1"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.326 5.095a1 1 0 0 1 .95 1.76l-.003.002-.01.006-.046.024-.18.102a23.981 23.981 0 0 0-2.653 1.755c-.726.558-1.415 1.171-1.914 1.781-.517.634-.72 1.13-.72 1.473 0 .345.203.842.72 1.476.499.61 1.188 1.223 1.914 1.78a24 24 0 0 0 2.891 1.89 1 1 0 0 1-.949 1.76l-.282-.157a25.954 25.954 0 0 1-2.878-1.906c-.785-.603-1.609-1.324-2.245-2.102-.616-.755-1.17-1.703-1.17-2.74s.554-1.985 1.17-2.74c.637-.778 1.46-1.498 2.246-2.101a26 26 0 0 1 3.08-2.02l.057-.03.015-.009.005-.002z"
    />
  </Svg>
);
export default IconlystArrowLeftBulkcurved;
