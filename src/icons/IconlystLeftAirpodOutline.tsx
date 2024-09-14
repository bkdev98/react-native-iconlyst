import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftAirpodOutline = ({
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
      d="M20.315 3.714c.996.913 1.685 2.21 1.685 3.64V17.49c0 1.274-1.03 2.31-2.305 2.31a2.307 2.307 0 0 1-2.305-2.31v-5.504h-.371a5.14 5.14 0 0 1-4.082-2.016 2.82 2.82 0 0 1-.556-1.705V5.92c0-.596.177-1.205.556-1.706a4.84 4.84 0 0 1 3.62-1.926h.003c1.408-.065 2.76.512 3.755 1.425m-3.684.073c.955-.044 1.929.352 2.67 1.032.742.68 1.199 1.596 1.199 2.536v10.134c0 .45-.363.81-.805.81a.807.807 0 0 1-.805-.81v-6.254a.75.75 0 0 0-.75-.75H17.02a3.64 3.64 0 0 1-2.886-1.422 1.32 1.32 0 0 1-.252-.8V5.922c0-.305.09-.588.253-.802a3.34 3.34 0 0 1 2.497-1.332M6.364 6.817a3.274 3.274 0 0 1 3.745-2.73.75.75 0 1 1-.235 1.48A1.774 1.774 0 0 0 7.846 7.05a.75.75 0 0 1-1.482-.233m9.615-1.093a.75.75 0 0 1 .75.75V7.84a.75.75 0 0 1-1.5 0V6.474a.75.75 0 0 1 .75-.75m-7.431 5.359C6.038 11.083 4 13.124 4 15.649s2.039 4.567 4.548 4.567 4.547-2.042 4.547-4.567-2.038-4.566-4.547-4.566M2.5 15.649c0-3.348 2.705-6.066 6.048-6.066s6.047 2.718 6.047 6.066-2.705 6.067-6.047 6.067c-3.343 0-6.048-2.719-6.048-6.067m5.132-3.009a.75.75 0 0 1 .75.75v3.093h1.566a.75.75 0 1 1 0 1.5H7.632a.75.75 0 0 1-.75-.75V13.39a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftAirpodOutline;
