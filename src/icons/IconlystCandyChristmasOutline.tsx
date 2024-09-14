import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandyChristmasOutline = ({
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
      d="M16.152 5.86a5.104 5.104 0 0 0-7.219 0 1.423 1.423 0 0 0 2.013 2.013 2.258 2.258 0 0 1 3.193 3.193l-7.37 7.369a1.423 1.423 0 0 0 2.013 2.013l7.37-7.37a5.104 5.104 0 0 0 0-7.218M7.872 4.8a6.604 6.604 0 0 1 9.34 9.34l-7.37 7.369a2.923 2.923 0 1 1-4.133-4.135l7.37-7.37a.758.758 0 0 0-1.072-1.07 2.923 2.923 0 0 1-4.135-4.135"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.106 4.736a.75.75 0 0 1 0 1.06l-3.045 3.045a.75.75 0 0 1-1.06-1.06l3.044-3.045a.75.75 0 0 1 1.061 0M11.161 3.034a.75.75 0 0 1 .819.675l.43 4.44a.75.75 0 0 1-1.494.144l-.43-4.44a.75.75 0 0 1 .675-.819M13.076 10.188a.75.75 0 0 1 .823-.669l4.444.462a.75.75 0 1 1-.155 1.492l-4.444-.462a.75.75 0 0 1-.668-.823M9.505 13.907a.75.75 0 0 1 .823-.669l5.448.567a.75.75 0 0 1-.155 1.492l-5.448-.567a.75.75 0 0 1-.668-.823M5.8 17.613a.75.75 0 0 1 .823-.669l5.464.568a.75.75 0 1 1-.155 1.492l-5.464-.568a.75.75 0 0 1-.669-.823"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCandyChristmasOutline;
