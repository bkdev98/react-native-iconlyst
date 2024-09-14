import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHarmonyLight = ({
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
      d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M9.153 16.315a1.62 1.62 0 0 1-1.596-1.597c0-1.586 1.672-2.339 3.007-2.584.8-.147 1.878-.123 2.682-.242a6 6 0 0 0 1.869-.604c.788-.41 1.33-1.088 1.33-2.007 0-.862-.733-1.595-1.639-1.595"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M9.283 16.315a1.726 1.726 0 0 1-1.726-1.726V9.412a1.726 1.726 0 1 1 3.452 0v5.177c0 .953-.773 1.726-1.726 1.726ZM14.718 16.315a1.726 1.726 0 0 1-1.726-1.726V9.412a1.726 1.726 0 1 1 3.452 0v5.177c0 .953-.772 1.726-1.726 1.726Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHarmonyLight;
