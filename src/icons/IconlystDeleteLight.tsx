import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteLight = ({
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
      d="m19.667 10.375-.612 8.376a3.317 3.317 0 0 1-3.308 3.075H9.754a3.32 3.32 0 0 1-3.308-3.076l-.612-8.375M21.015 7.23H4.485M16.521 7.229l-.503-2.476a1.25 1.25 0 0 0-1.205-.925h-4.121a1.25 1.25 0 0 0-1.211.925l-.499 2.476M10.852 12.609v4.508m3.38-4.508v4.508"
    />
  </Svg>
);
export default IconlystDeleteLight;
