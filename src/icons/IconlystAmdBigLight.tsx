import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAmdBigLight = ({
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
      d="m18.888 18.888-3.11-3.11V9.167a.944.944 0 0 0-.944-.945H8.223l-3.11-3.11A.944.944 0 0 1 5.78 3.5h13.776c.521 0 .944.423.944.944V18.22a.945.945 0 0 1-1.612.668M11.332 20.224l4.446-4.446H9.167a.944.944 0 0 1-.945-.944V8.223l-4.445 4.445a.94.94 0 0 0-.277.668v6.22c0 .522.423.944.944.944h6.22c.25 0 .491-.1.668-.276"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAmdBigLight;
