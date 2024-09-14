import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntennaSideBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 11.308a4.03 4.03 0 0 0-4.028-4.029H7.529A4.03 4.03 0 0 0 3.5 11.31v5.456a4.03 4.03 0 0 0 4.03 4.029h9.942a4.03 4.03 0 0 0 4.028-4.03v-2.14M13.535 3.203l-2.773 4.075-2.701-4.075"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.478 7.28h3.724a4.03 4.03 0 0 1 4.03 4.03v5.456a4.03 4.03 0 0 1-4.03 4.029H7.478"
    />
  </Svg>
);
export default IconlystOldTvAntennaSideBroken;
