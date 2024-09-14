import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDualShockControllerBroken = ({
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
      d="M20.997 14.787c.033 1.308-.188 2.736-1.517 3.277-1.251.462-2.273.227-2.947-.272-.728-.541-.807-1.2-1.854-1.786-1.046-.586-4.163-.69-5.358 0s-1.125 1.245-1.854 1.786c-.673.499-1.696.733-2.947.272-1.328-.54-1.55-1.969-1.517-3.277-.006-.295.241-7.08 3.037-8.542.574-.256 2.118-1.137 4.108.05 1.456.867 2.068 1.02 3.704 0 1.906-1.19 3.535-.306 4.11-.05 1.676.876 2.436 3.67 2.774 5.828M14.572 11.174v-.01M17.441 11.174v-.01M16.002 9.734h.01M16.002 12.604h.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.003 9.729a1.435 1.435 0 1 1-1.435 1.435"
    />
  </Svg>
);
export default IconlystDualShockControllerBroken;
