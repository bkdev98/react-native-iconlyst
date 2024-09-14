import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCompareGitDiffBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M12.835 3.803a.8.8 0 0 1 .287-.057h3.372a.75.75 0 0 1 0 1.5h-1.56l1.917 1.918a4.8 4.8 0 0 1 1.404 3.39v3.913a.75.75 0 1 1-1.5 0v-3.913c0-.874-.347-1.712-.965-2.33l-1.917-1.917v1.56a.75.75 0 0 1-1.5 0v-3.37a.75.75 0 0 1 .462-.694M7.245 9.533a.75.75 0 0 0-1.5 0v3.913c0 1.272.505 2.491 1.404 3.39l1.917 1.918h-1.56a.75.75 0 1 0 0 1.5h3.338a.75.75 0 0 0 .784-.75v-3.371a.75.75 0 0 0-1.5 0v1.56L8.21 15.776a3.3 3.3 0 0 1-.965-2.33z" />
    </G>
    <Circle cx={6.541} cy={6.991} r={2.905} fill={props.color} />
    <Circle cx={17.462} cy={17.007} r={2.906} fill={props.color} />
  </Svg>
);
export default IconlystCompareGitDiffBulk;
