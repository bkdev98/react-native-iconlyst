import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystApronOutline = ({
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
      d="M12 17.95a3.82 3.82 0 0 1-3.818-3.82v-.43c0-.98.793-1.77 1.773-1.77h4.09c.98 0 1.773.79 1.773 1.77v.43c0 2.11-1.708 3.82-3.818 3.82m-2.318-3.82A2.32 2.32 0 0 0 12 16.45a2.32 2.32 0 0 0 2.318-2.32v-.43a.27.27 0 0 0-.272-.27h-4.09a.28.28 0 0 0-.226.117.27.27 0 0 0-.048.153z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.802 2c.414 0 .75.34.75.75 0 1.93.102 3.3.558 4.42.438 1.07 1.237 1.98 2.816 2.87a2.52 2.52 0 0 1 1.294 2.38l-.46 6.6a2.54 2.54 0 0 1-2.33 2.36c-2.895.21-7.977.15-10.953-.18a2.526 2.526 0 0 1-2.249-2.34v-.01l-.449-6.43a2.52 2.52 0 0 1 1.294-2.38c1.58-.89 2.379-1.8 2.817-2.87.456-1.12.557-2.49.557-4.42 0-.41.336-.75.75-.75s.75.34.75.75c0 1.018-.025 1.96-.135 2.83h4.375c-.093-.743-.125-1.538-.133-2.387l-.001-.188V2.75c0-.41.335-.75.75-.75m-.31 5.08H9.507a8 8 0 0 1-.125.383q-.047.128-.098.255l-.005.012c-.597 1.47-1.675 2.6-3.468 3.61-.356.2-.561.58-.534.97l.306 4.384v.007l.143 2.049c.034.5.42.9.916.96 2.878.32 7.868.38 10.679.17.503-.04.907-.44.943-.96l.46-6.61c.028-.39-.177-.77-.533-.97-1.793-1.01-2.872-2.14-3.469-3.61a7 7 0 0 1-.228-.65"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystApronOutline;
