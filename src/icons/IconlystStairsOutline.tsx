import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStairsOutline = ({
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
      fillRule="evenodd"
      d="M15.238 6.977v-2.81c0-.645.522-1.167 1.167-1.167h3.178c.645 0 1.167.522 1.167 1.167v15.01c0 .645-.522 1.167-1.167 1.167H4.417a1.166 1.166 0 0 1-1.167-1.167v-3.011c0-.644.522-1.167 1.167-1.167h2.796v-2.744c0-.645.522-1.167 1.167-1.167h2.845V8.144c0-.644.523-1.167 1.167-1.167zm1.5.333c0 .645-.523 1.167-1.167 1.167h-2.846v2.944c0 .644-.522 1.167-1.167 1.167H8.713v2.744c0 .645-.523 1.167-1.167 1.167H4.75v2.345h14.5V4.5h-2.512z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStairsOutline;
