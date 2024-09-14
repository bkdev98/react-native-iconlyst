import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygon2Bulk = ({
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
      d="M12.058 20.385V3.915a.7.7 0 0 0 .266-.073l.004-.002 1.305-.63a1.73 1.73 0 0 1 2.304.746l.68 1.28a.76.76 0 0 0 .535.394l1.424.249a1.744 1.744 0 0 1 1.426 1.952l-.204 1.44a.74.74 0 0 0 .198.619l1.015 1.054a1.725 1.725 0 0 1-.002 2.416L20 14.407a.74.74 0 0 0-.202.624l.204 1.439a1.745 1.745 0 0 1-1.43 1.954l-1.423.259a.73.73 0 0 0-.532.382l-.68 1.28a1.73 1.73 0 0 1-2.31.743l-1.298-.626a.8.8 0 0 0-.271-.077"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.058 3.914a.74.74 0 0 1-.386-.075l-1.3-.627a1.73 1.73 0 0 0-2.308.744l-.68 1.28a.76.76 0 0 1-.528.392l-1.428.25A1.744 1.744 0 0 0 4 7.83l.203 1.44A.74.74 0 0 1 4 9.892l-1.008 1.048a1.725 1.725 0 0 0-.002 2.416l1.014 1.053a.74.74 0 0 1 .2.62l-.204 1.44a1.743 1.743 0 0 0 1.422 1.952l1.442.262a.72.72 0 0 1 .52.38l.682 1.281c.315.591.912.927 1.532.927.26 0 .521-.059.77-.183l1.31-.63a.7.7 0 0 1 .38-.074z"
    />
  </Svg>
);
export default IconlystPolygon2Bulk;
