import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiningTableBroken = ({
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
      d="m21 18.216-.922-4.67.23-1.94M21 5.785l-.41 3.448M15.77 18.215v-3.663c0-.581.47-1.052 1.051-1.052h3.258M3 18.216l.923-4.67-.23-1.94M3 5.785l.41 3.448M8.231 18.215v-3.663c0-.581-.47-1.052-1.051-1.052H3.922M12.018 18.217v-6.72M6.586 9.195h10.863"
    />
  </Svg>
);
export default IconlystDiningTableBroken;
