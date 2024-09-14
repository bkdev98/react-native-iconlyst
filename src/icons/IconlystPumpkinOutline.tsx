import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPumpkinOutline = ({
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
      fillRule="evenodd"
      d="M9.802 6.483a3.94 3.94 0 0 1 2.703-1.07c1.04 0 1.996.402 2.699 1.071l.124-.066.025-.013.011-.006a4.46 4.46 0 0 1 4.908.578l.002.001c1.846 1.592 2.146 4.295 1.902 6.31-.26 2.172-1.163 4.376-2.65 6.043l-.002.003c-1.315 1.462-3.224 2.23-5.214 1.795a4.2 4.2 0 0 1-1.814.402 4.1 4.1 0 0 1-1.798-.402c-1.99.435-3.897-.334-5.212-1.796l-.002-.002c-1.487-1.667-2.39-3.87-2.66-6.04v-.002c-.245-2.016.056-4.72 1.902-6.31l.002-.002c1.376-1.177 3.32-1.383 4.918-.578l.013.007.011.006zm6.243 1.253a3 3 0 0 0-.25.142 1 1 0 0 0-.074.057q-.026.023-.023.022a.75.75 0 0 1-1.218-.023 2.39 2.39 0 0 0-1.976-1.021c-.818 0-1.543.4-1.993 1.024a.75.75 0 0 1-1.197.025.5.5 0 0 0-.106-.086 2.972 2.972 0 0 0-3.504.239c-1.272 1.098-1.615 3.15-1.39 4.992.236 1.905 1.03 3.812 2.289 5.225 1.056 1.173 2.52 1.688 3.99 1.278a.75.75 0 0 1 .577.073c.391.226.832.348 1.326.348.498 0 .955-.124 1.343-.348a.75.75 0 0 1 .576-.073c1.47.41 2.936-.105 3.992-1.278 1.26-1.413 2.053-3.32 2.28-5.222v-.002c.223-1.843-.119-3.895-1.391-4.993a2.96 2.96 0 0 0-3.251-.38"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.63 3.946-.003.001-.036.011a2.213 2.213 0 0 0-.692.392c-.357.302-.743.828-.72 1.795a.75.75 0 1 1-1.5.035c-.035-1.47.587-2.415 1.253-2.976a3.7 3.7 0 0 1 1.19-.67l.127-.038.011-.003.004-.001h.002l.001-.001.179.728-.178-.728a.75.75 0 0 1 .362 1.455M14.48 6.535a.75.75 0 0 1 1.041.202c.866 1.28 1.09 2.89 1.074 4.241-.017 1.355-.28 2.581-.511 3.188a.75.75 0 0 1-1.401-.537c.158-.413.397-1.459.412-2.67.015-1.215-.197-2.466-.816-3.382a.75.75 0 0 1 .2-1.042M10.577 6.535a.75.75 0 0 0-1.042.202c-.866 1.28-1.09 2.89-1.073 4.241.017 1.355.279 2.581.511 3.188a.75.75 0 1 0 1.401-.537c-.158-.413-.397-1.459-.412-2.67-.016-1.215.197-2.466.816-3.382a.75.75 0 0 0-.201-1.042"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPumpkinOutline;
