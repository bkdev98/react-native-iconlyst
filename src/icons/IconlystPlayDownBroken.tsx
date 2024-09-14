import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayDownBroken = ({
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
      d="M18.447 12.141c.519-.938.973-1.865 1.314-2.71.737-2.273-.232-3.581-2.79-3.993A43 43 0 0 0 12 5.18a43 43 0 0 0-4.974.258c-2.567.398-3.51 1.722-2.79 3.992 1.125 2.792 3.484 6.466 5.323 8.496q2.44 2.778 4.882 0a25 25 0 0 0 1.7-2.137"
    />
  </Svg>
);
export default IconlystPlayDownBroken;
