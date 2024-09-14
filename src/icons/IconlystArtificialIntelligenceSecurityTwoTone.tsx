import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceSecurityTwoTone = ({
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
      <Path d="M12 4.12 9.256 3l-4.17 2.729v3.003L3 9.804v4.393l2.085 1.07v3L9.256 21 12 19.875M12 18.125v1.755L14.744 21l4.17-2.729v-3.003L21 14.196V9.803l-2.085-1.07v-3L14.744 3 12 4.125v1.75" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 15.61s2.936-.89 2.936-3.34c0-2.452.107-2.642-.129-2.88-.236-.237-2.422-.997-2.807-.997s-2.571.762-2.807.998c-.236.235-.129.427-.129 2.878S12 15.61 12 15.61"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceSecurityTwoTone;
