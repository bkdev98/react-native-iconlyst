import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarBroken = ({
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
      d="M6.328 14.904 3.37 12.062a1.211 1.211 0 0 1 .682-2.072l4.09-.589c.4-.056.746-.304.927-.664l1.829-3.653a1.24 1.24 0 0 1 2.201 0l1.83 3.654c.182.36.53.608.928.664l4.09.59a1.211 1.211 0 0 1 .682 2.072l-2.96 2.841a1.2 1.2 0 0 0-.355 1.075l.7 4.013a1.228 1.228 0 0 1-1.787 1.28l-3.656-1.895a1.25 1.25 0 0 0-1.147 0L7.77 21.272a1.228 1.228 0 0 1-1.788-1.28M12 13.419v5.795M3.068 10.845l8.997 2.851M20.909 10.845l-8.88 2.814M6.484 21.194l8.82-12.006M17.478 21.194 8.725 9.188"
    />
  </Svg>
);
export default IconlystStarBroken;
