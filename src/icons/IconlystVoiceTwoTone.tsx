import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path
        d="M4.714 10.932a7.403 7.403 0 0 0 7.404 7.404 7.403 7.403 0 0 0 7.404-7.404M12.119 21.147v-2.811"
        opacity={0.4}
      />
      <Path d="M12.245 14.584h-.253a3.66 3.66 0 0 1-3.66-3.66v-4.55a3.66 3.66 0 0 1 3.66-3.66h.253a3.66 3.66 0 0 1 3.66 3.66v4.55a3.66 3.66 0 0 1-3.66 3.66" />
    </G>
  </Svg>
);
export default IconlystVoiceTwoTone;
