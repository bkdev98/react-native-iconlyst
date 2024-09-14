import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrapeBold = ({
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
      fill={props.color}
      d="M8.38 2.5a.5.5 0 0 0-.5.5v.853c0 1.002.342 1.861.972 2.47.628.604 1.499.92 2.487.921a5 5 0 0 0-.093.574 2.57 2.57 0 0 0-1.41 1.048c-.275.42-.442.918-.442 1.447a2.6 2.6 0 0 0 .428 1.427c.048.079.098.16.17.244a2.62 2.62 0 0 0 2.193.924 2.62 2.62 0 0 0 1.843-.95 6 6 0 0 0 .176-.247c.25-.41.4-.89.4-1.398 0-.516-.145-.99-.407-1.398l-.002-.003-.001-.002a2.57 2.57 0 0 0-1.438-1.091c.18-1.256 1.114-2.534 2.662-2.835a.75.75 0 1 0-.285-1.472 4.7 4.7 0 0 0-2.554 1.395 3.1 3.1 0 0 0-.852-1.486c-.629-.606-1.502-.921-2.493-.921z"
    />
    <Path
      fill={props.color}
      d="M7.064 7.709a2.605 2.605 0 0 0 0 5.21h.048a2.7 2.7 0 0 0 1.779-.74.52.52 0 0 0 .115-.58 3.23 3.23 0 0 1 0-2.572.52.52 0 0 0-.114-.58 2.61 2.61 0 0 0-1.828-.738M16.936 7.709c-.714 0-1.36.284-1.826.746a.52.52 0 0 0-.112.576c.17.394.262.826.262 1.282 0 .455-.097.89-.264 1.285a.52.52 0 0 0 .114.573c.427.42 1.001.696 1.64.737l.048.004q.069.005.137.006h.001a2.605 2.605 0 0 0 0-5.21M14.81 12.785a.52.52 0 0 0-.678-.002c-.433.37-.964.632-1.55.736a.52.52 0 0 0-.353.241c-.24.393-.371.864-.371 1.336 0 .487.134 1.004.4 1.384l.007.009.014.02.004.008a2.58 2.58 0 0 0 2.163 1.184h.05a2.605 2.605 0 0 0 2.584-2.605c0-.492-.135-.948-.376-1.337a.52.52 0 0 0-.352-.24 3.2 3.2 0 0 1-1.542-.734M9.871 12.787a.52.52 0 0 0-.675 0 3.27 3.27 0 0 1-1.546.731.52.52 0 0 0-.352.24c-.24.39-.376.846-.376 1.338 0 1.339 1.027 2.446 2.342 2.593q.137.013.275.012c.706 0 1.345-.279 1.81-.732a.52.52 0 0 0 .114-.579 3.32 3.32 0 0 1-.098-2.307.52.52 0 0 0-.341-.659 3.3 3.3 0 0 1-1.153-.637M12.34 17.572a.52.52 0 0 0-.68 0 3.23 3.23 0 0 1-1.864.774.52.52 0 0 0-.465.394q-.078.311-.079.645a2.614 2.614 0 0 0 2.616 2.605 2.605 2.605 0 0 0 2.514-3.293.52.52 0 0 0-.423-.38 3.23 3.23 0 0 1-1.618-.745"
    />
  </Svg>
);
export default IconlystGrapeBold;