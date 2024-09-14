import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFavoriteDateBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.416 3v3.223M8.591 3v3.223M15.12 16.225l-.447-2.231a.49.49 0 0 1 .145-.44l1.207-1.159a.494.494 0 0 0-.278-.846l-1.67-.24a.5.5 0 0 1-.378-.27l-.745-1.492a.507.507 0 0 0-.899 0l-.747 1.492a.5.5 0 0 1-.378.27l-1.67.241a.494.494 0 0 0-.277.845l1.208 1.16a.49.49 0 0 1 .144.439l-.285 1.637a.502.502 0 0 0 .73.522l1.49-.773"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.424 4.487h.566c2.64 0 4.276 1.466 4.269 4.16v8.182c0 2.696-1.636 4.17-4.277 4.17H8.026c-2.633 0-4.277-1.5-4.277-4.237V8.649c0-1.95.86-3.256 2.33-3.83M8.866 4.488h4.755"
    />
  </Svg>
);
export default IconlystFavoriteDateBroken;
