import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceZapLight = ({
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
      d="M12 4.12 9.256 3l-4.17 2.729v3.003L3 9.804v4.393l2.085 1.07v3L9.256 21 12 19.875M12 18.125v1.755L14.744 21l4.17-2.729v-3.003L21 14.196V9.803l-2.085-1.07v-3L14.744 3 12 4.125v1.75"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.703 8.325-2.865 3.947a.426.426 0 0 0 .344.675h2.344v2.478c0 .412.529.584.77.25l2.866-3.946a.426.426 0 0 0-.344-.676h-2.345V8.575a.426.426 0 0 0-.77-.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceZapLight;
