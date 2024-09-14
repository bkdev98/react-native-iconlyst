import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVechainOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M13.376 17.28h-2.208a.74.74 0 0 1-.7-.476C7.398 9.02 7.39 8.995 7.382 8.972a.75.75 0 0 1 .669-.99h2.254a.75.75 0 0 1 .7.475l2.368 6.014c.695-1.792 1.743-4.49 2.34-6.013a.752.752 0 0 1 1.4.548c-.65 1.657-1.835 4.712-2.516 6.467-.293.754-.492 1.27-.518 1.334a.75.75 0 0 1-.703.472m-4.182-7.8 2.483 6.3h.6l-2.48-6.3z"
    />
  </Svg>
);
export default IconlystVechainOutline;
