import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseSwitchBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.319 3.34c-4.047 0-7.328 1.323-7.328 2.956 0 1.632 3.28 2.956 7.328 2.956 4.046 0 7.327-1.324 7.327-2.956 0-1.174-1.697-2.189-4.155-2.666"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.991 15.732v2.042s0 2.888 7.293 2.888M17.646 12V6.227M2.991 6.227V12s0 2.887 7.293 2.887M19.398 20.552v-5.404M21.009 19l-1.613 1.556L17.785 19M14.89 15.227v5.403M13.276 16.782l1.613-1.555 1.612 1.555"
    />
  </Svg>
);
export default IconlystDatabaseSwitchBroken;
