import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpinachTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M9.383 16.945C5.113 18.374 3 14.9 3 12.81c0-1.187.512-2.255 1.328-2.994A2.494 2.494 0 0 1 7.07 6.608a4.039 4.039 0 0 1 7.778-.933q.275-.065.57-.066a2.494 2.494 0 0 1 2.379 3.25A4.04 4.04 0 0 1 21 12.808c0 4.822-5.842 5.767-8.919 4.36" />
      <Path d="M14.27 4.648a4.02 4.02 0 0 1 .844 2.47c0 .75-.206 1.454-.563 2.057" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 7.94v12.98M12 13.808c-.773-1.049-1.235-1.638-2.753-2.754M14.637 14.117c.357-.486.572-.759 1.275-1.276"
    />
  </Svg>
);
export default IconlystSpinachTwoTone;
