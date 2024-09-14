import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygonDashBold = ({
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
      d="M14.16 20.871H9.84a1 1 0 1 0 0 2h4.32a1 1 0 1 0 0-2M19.184 17.003l-3.054 3.05a1 1 0 0 0 1.413 1.416l3.054-3.05a1 1 0 1 0-1.413-1.416M4.813 17.003a.999.999 0 1 0-1.412 1.416l3.056 3.05a1 1 0 0 0 1.414-.002 1 1 0 0 0-.002-1.414zM4 15.03v-4.319a1 1 0 1 0-2 0v4.32a1 1 0 1 0 2 0M6.457 4.273 3.4 7.323a1 1 0 0 0 1.412 1.415L7.869 5.69a.999.999 0 1 0-1.412-1.416M14.16 2.871H9.84a1 1 0 1 0 0 2h4.32a1 1 0 1 0 0-2M19.185 8.738a1 1 0 0 0 1.414-.002 1 1 0 0 0-.002-1.414l-3.055-3.049A1 1 0 1 0 16.13 5.69zM21 9.71a1 1 0 0 0-1 1v4.32a1 1 0 1 0 2 0v-4.32a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPolygonDashBold;
