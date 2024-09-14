import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDumbbells1Outline = ({
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
      d="M7.708 21.022a4.5 4.5 0 0 1-2.059-.371c-.788-.454-1.1-1.371-1.12-3.368-.022-1.997.272-2.921 1.08-3.408a5.84 5.84 0 0 1 4.255.006c.495.333.837.849.952 1.434l4.857-.05a2.27 2.27 0 0 1 .922-1.453 5.83 5.83 0 0 1 4.284-.075c.788.454 1.1 1.37 1.121 3.367s-.272 2.919-1.079 3.407a5.84 5.84 0 0 1-4.257 0 2.26 2.26 0 0 1-.952-1.434l-4.857.049a2.25 2.25 0 0 1-.924 1.454c-.69.337-1.456.49-2.223.442m.137-6.047c-.49-.023-.979.037-1.449.177-.338.2-.375 1.413-.368 2.116s.07 1.91.4 2.1a5.3 5.3 0 0 0 2.653-.024.87.87 0 0 0 .325-.65 1.21 1.21 0 0 1 1.2-1.066l5.334-.054a1.24 1.24 0 0 1 1.21 1.037.87.87 0 0 0 .34.645 5.37 5.37 0 0 0 2.641-.02c.337-.205.374-1.414.367-2.117s-.069-1.91-.4-2.1a5.3 5.3 0 0 0-2.648.025.87.87 0 0 0-.323.649 1.21 1.21 0 0 1-1.2 1.066l-5.334.056h-.01a1.216 1.216 0 0 1-1.207-1.041.87.87 0 0 0-.34-.646 3.1 3.1 0 0 0-1.186-.153zM17.279 12.144a5.7 5.7 0 0 1-3.142-.808 2.27 2.27 0 0 1-.724-1.56l-4.81-.687a2.26 2.26 0 0 1-1.13 1.3 5.83 5.83 0 0 1-4.246-.573c-.712-.568-.881-1.522-.6-3.5s.711-2.845 1.582-3.205a5.84 5.84 0 0 1 4.207.65c.438.404.698.966.724 1.561l4.809.684a2.27 2.27 0 0 1 1.131-1.3 5.82 5.82 0 0 1 4.247.575c.71.566.879 1.52.6 3.5s-.71 2.845-1.582 3.2a2.8 2.8 0 0 1-1.066.162M8.404 7.557q.09 0 .177.013l5.28.752a1.21 1.21 0 0 1 1.044 1.215.87.87 0 0 0 .24.688 5.34 5.34 0 0 0 2.612.38c.366-.152.584-1.34.683-2.037s.222-1.9-.075-2.136a5.3 5.3 0 0 0-2.63-.375.87.87 0 0 0-.418.593 1.21 1.21 0 0 1-1.344.873l-5.28-.752A1.215 1.215 0 0 1 7.65 5.554a.87.87 0 0 0-.238-.688A5.33 5.33 0 0 0 4.8 4.488c-.364.15-.584 1.34-.683 2.036s-.221 1.9.076 2.136c.83.345 1.735.473 2.629.374a.87.87 0 0 0 .418-.592 1.21 1.21 0 0 1 1.164-.887z"
    />
  </Svg>
);
export default IconlystDumbbells1Outline;
