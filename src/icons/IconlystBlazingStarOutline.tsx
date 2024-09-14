import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlazingStarOutline = ({
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
      d="m6.896 10.835-.076 2.358a1.48 1.48 0 0 1-.676 1.188l-1.983 1.285 2.21.764c.46.157.811.534.936 1.004l.6 2.257 1.458-1.878c.296-.38.758-.593 1.239-.572l2.375.11-1.327-1.92a1.46 1.46 0 0 1-.158-1.367l.851-2.174-2.265.674h-.002a1.47 1.47 0 0 1-1.341-.258zm.049-1.52a1.48 1.48 0 0 0-1.546 1.41l-.077 2.401-2.03 1.317a1.464 1.464 0 0 0 .305 2.616h.002l2.264.782.61 2.297.003.008c.086.31.271.582.525.776l.001.001a1.473 1.473 0 0 0 2.062-.277l1.48-1.906 2.41.11c.318.017.633-.07.898-.247h.001a1.473 1.473 0 0 0 .401-2.046l-1.357-1.962.874-2.232a1.463 1.463 0 0 0-1.793-1.93l-2.318.69-1.866-1.492-.008-.006a1.48 1.48 0 0 0-.841-.31"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.451 2.968a.75.75 0 0 1 .248.605l-.135 2.147 1.601 1.376a.75.75 0 0 1 .24.747l-.502 2.045 1.523 1.722a.75.75 0 0 1-.508 1.245c-.828.06-2.244.374-3.889.913-1.632.535-3.437 1.275-5.04 2.157a.75.75 0 0 1-.724-1.314c1.7-.936 3.596-1.71 5.297-2.269a27 27 0 0 1 2.828-.77l-.871-.985a.75.75 0 0 1-.167-.675l.486-1.979-1.534-1.318a.75.75 0 0 1-.26-.616l.096-1.527c-2.033.546-3.914 1.678-5.449 2.95-1.778 1.474-3.01 3.067-3.454 4.009a.75.75 0 0 1-1.357-.64c.567-1.204 1.97-2.962 3.854-4.524 1.894-1.57 4.357-3.01 7.09-3.48a.75.75 0 0 1 .627.181"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBlazingStarOutline;
