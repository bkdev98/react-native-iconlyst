import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDumbbell1Outline = ({
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
      d="M7.865 21.755c-.766 0-1.7-.468-3.3-2.068-1.976-1.976-2.227-2.938-1.992-3.85.216-1.025 2.47-3.387 3.7-3.623a2.71 2.71 0 0 1 2.12.517l4.586-4.588a2.7 2.7 0 0 1-.515-2.12c.236-1.232 2.6-3.487 3.656-3.71.878-.227 1.84.024 3.817 2 1.977 1.978 2.226 2.939 1.99 3.85-.214 1.024-2.468 3.386-3.7 3.623a2.7 2.7 0 0 1-2.12-.515l-4.586 4.584a2.72 2.72 0 0 1 .516 2.119c-.238 1.232-2.6 3.485-3.655 3.709q-.254.068-.517.072m-1.12-8.085a1 1 0 0 0-.19.017 6.74 6.74 0 0 0-2.526 2.5c-.047.188-.173.674 1.595 2.443s2.253 1.64 2.417 1.6a6.7 6.7 0 0 0 2.522-2.531 1.29 1.29 0 0 0-.32-1.04 1.335 1.335 0 0 1 .122-1.764l4.779-4.78a1.334 1.334 0 0 1 1.76-.117 1.29 1.29 0 0 0 1.039.319 6.73 6.73 0 0 0 2.526-2.5c.048-.187.174-.675-1.593-2.441s-2.255-1.642-2.415-1.6a6.67 6.67 0 0 0-2.524 2.532 1.28 1.28 0 0 0 .318 1.038 1.34 1.34 0 0 1-.118 1.763l-4.781 4.78a1.33 1.33 0 0 1-1.761.119 1.4 1.4 0 0 0-.85-.341z"
    />
  </Svg>
);
export default IconlystDumbbell1Outline;
