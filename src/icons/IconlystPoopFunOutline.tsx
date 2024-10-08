import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopFunOutline = ({
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
      fill={props.color}
      d="M12.538 20.808a45 45 0 0 1-6.144-.356c-2.425-.5-3.907-2.093-3.907-4.171a4.17 4.17 0 0 1 2.64-3.916 4.14 4.14 0 0 1 3.224-4 3.9 3.9 0 0 1 1.406-1.943 1.944 1.944 0 0 0 1-2.255.77.77 0 0 1 .155-.724.76.76 0 0 1 .688-.251c.487.109.958.283 1.4.518l.194.092c2.242 1.095 3.38 2.738 3.237 4.648a4.17 4.17 0 0 1 2.9 3.9 4.15 4.15 0 0 1 2.66 3.923 4.345 4.345 0 0 1-3.55 4.157 34 34 0 0 1-5.903.378m-5.88-8.038q.011.074.013.147a.75.75 0 0 1-.609.736 2.635 2.635 0 0 0-2.076 2.628c0 1.99 2.044 2.566 2.671 2.695 3.793.45 7.626.452 11.419.006a2.885 2.885 0 0 0 2.41-2.7 2.62 2.62 0 0 0-2.08-2.627.75.75 0 0 1-.607-.828q.024-.18.03-.362a2.616 2.616 0 0 0-2.315-2.667.75.75 0 0 1-.665-.945q.05-.19.07-.383c.194-1.685-1.186-2.73-2.376-3.313l-.193-.092-.04-.018a3.54 3.54 0 0 1-1.684 2.6 2.4 2.4 0 0 0-.93 1.517.746.746 0 0 1-.694.625 2.616 2.616 0 0 0-2.376 2.673 2 2 0 0 0 .031.308"
    />
    <Path
      fill={props.color}
      d="M9.824 12.87a.753.753 0 1 1 .75-.76v.01a.75.75 0 0 1-.75.75M14.695 12.87a.754.754 0 1 1 .75-.76v.01a.75.75 0 0 1-.75.75M12.235 17.53a2.466 2.466 0 0 1-2.4-2.523.75.75 0 0 1 .75-.75h3.3a.75.75 0 0 1 .75.75 2.466 2.466 0 0 1-2.4 2.523m-.611-1.773a.86.86 0 0 0 1.222 0z"
    />
  </Svg>
);
export default IconlystPoopFunOutline;
