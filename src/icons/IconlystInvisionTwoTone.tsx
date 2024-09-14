import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInvisionTwoTone = ({
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
      d="M6.259 4.1c.941-.376 2.115.312 2.182 1.336.133.966-.782 1.861-1.74 1.759-.82-.055-1.523-.795-1.5-1.622A1.62 1.62 0 0 1 6.259 4.1"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.453 10.045c-.733-.845-2.031-1.073-3.04-.625-1.078.458-1.916 1.356-2.486 2.363.182-.795.532-2.387.532-2.387h-2.168s-.8 2.808-1.383 5.138c-.367 1.118-1.096 2.069-2.294 2.183-.312.039-.983-.06-1.1-.387-.094-.56.078-1.114.21-1.652.572-2.264 1.378-5.282 1.378-5.282H3.576L3 11.505h1.884S4.072 14.82 3.67 16.48c-.274 1.246-.205 2.884 1.218 3.367 1.745.56 3.32-.461 4.234-1.916a274 274 0 0 0-.484 1.898l2.675.009s.63-2.494 1.159-4.57c.206-.806.597-1.672 1.388-2.052.593-.254 1.387-.256 1.864.234.446.475.412 1.199.275 1.792-.423 1.603-.895 2.918.27 4.094.728.735 1.649.808 2.587.478 1.204-.465 1.797-1.731 2.144-2.89-.505 1.684-2.058 1.706-2.553.508-.379-1.504.571-3.095.74-4.582.096-.974-.057-2.052-.734-2.806"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystInvisionTwoTone;
