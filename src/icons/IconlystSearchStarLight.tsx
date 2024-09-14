import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchStarLight = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.669 12.756a8.18 8.18 0 1 1-9.128-9.183M17.125 17.68 20.453 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.785 3.142.747 1.503a.26.26 0 0 0 .193.142l1.673.24a.26.26 0 0 1 .17.1.25.25 0 0 1-.027.333l-1.212 1.172a.25.25 0 0 0-.073.226l.29 1.654a.254.254 0 0 1-.21.288.3.3 0 0 1-.167-.026l-1.49-.78a.25.25 0 0 0-.239 0l-1.5.785a.263.263 0 0 1-.349-.107.26.26 0 0 1-.025-.16l.29-1.656a.25.25 0 0 0-.073-.226l-1.22-1.171a.256.256 0 0 1 0-.36.3.3 0 0 1 .147-.071l1.673-.242a.26.26 0 0 0 .194-.142l.746-1.502a.256.256 0 0 1 .345-.115q.076.04.117.115"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchStarLight;
