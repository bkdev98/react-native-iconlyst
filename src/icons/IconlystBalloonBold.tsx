import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBalloonBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.003 7.784a2.11 2.11 0 0 0-2.106 2.107.75.75 0 0 1-1.5 0 3.61 3.61 0 0 1 3.606-3.607.75.75 0 0 1 0 1.5m7.371 2.171c0-3.916-3.186-7.103-7.102-7.103S5.167 6.04 5.167 9.955c0 3.316 2.378 6.973 5.74 7.777l-.794.82a.75.75 0 0 0 .54 1.27h.47c-.264.69-.183 1.484.27 2.371a.75.75 0 0 0 1.007.327.75.75 0 0 0 .328-1.008c-.179-.35-.36-.844-.204-1.195.136-.3.483-.448.614-.495h.758a.75.75 0 0 0 .54-1.27l-.796-.82c3.36-.806 5.734-4.462 5.734-7.777M19.823 17.61a2.353 2.353 0 0 0-2.567 2.113.749.749 0 1 0 1.492.145c.046-.467.472-.794.93-.766a.75.75 0 1 0 .145-1.492M5.588 18.535a.213.213 0 0 1-.109-.279l.055-.123a1.85 1.85 0 0 0-.934-2.44l-.125-.056a.49.49 0 0 1-.245-.644.75.75 0 0 0-1.37-.609 1.99 1.99 0 0 0 1.004 2.623l.125.055a.346.346 0 0 1 .177.455l-.056.124a1.717 1.717 0 0 0 .865 2.263.75.75 0 0 0 .613-1.369M20.687 3.707a.763.763 0 0 0-.872.604.75.75 0 0 0 .046.422.75.75 0 0 0 .933.434.76.76 0 0 0 .517-.77.77.77 0 0 0-.624-.69M3.576 6.176q.152 0 .3-.062A2.31 2.31 0 0 0 5.07 3.079a.749.749 0 1 0-1.375.598.81.81 0 0 1-.419 1.062.749.749 0 0 0 .3 1.437"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBalloonBold;
