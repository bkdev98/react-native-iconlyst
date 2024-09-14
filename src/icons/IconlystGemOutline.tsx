import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGemOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M12.249 16.588a1.51 1.51 0 0 1-1.115-.494l-3.472-3.813a1.674 1.674 0 0 1-.144-2.079l1.4-2.054a1.68 1.68 0 0 1 1.388-.734h3.89a1.68 1.68 0 0 1 1.39.738l1.4 2.051a1.675 1.675 0 0 1-.145 2.077l-3.471 3.816a1.52 1.52 0 0 1-1.121.492m-3.48-5.316 3.473 3.813 3.487-3.815a.18.18 0 0 0 .015-.223l-1.4-2.054a.18.18 0 0 0-.15-.08h-3.89a.18.18 0 0 0-.15.08l-1.4 2.054a.18.18 0 0 0 .017.225z"
    />
  </Svg>
);
export default IconlystGemOutline;
