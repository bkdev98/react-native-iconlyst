import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceSignalTwoTone = ({
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
      d="M14.84 6.938V8.71"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.382 8.713h.916c.49 0 .887.396.887.884v2.741a.885.885 0 0 1-.887.884h-.916a.885.885 0 0 1-.887-.884V9.597c0-.488.397-.884.887-.884"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.84 13.22v1.774M9.16 8.375v1.774"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.703 10.147h.915c.49 0 .887.395.887.884v3.37a.885.885 0 0 1-.887.884h-.915a.885.885 0 0 1-.887-.884v-3.37c0-.489.397-.885.887-.885"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.161 15.287v1.774"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceSignalTwoTone;
