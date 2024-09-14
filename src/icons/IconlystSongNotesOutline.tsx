import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongNotesOutline = ({
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
      d="M19.097 15.322a1.403 1.403 0 1 0 0 2.807 1.403 1.403 0 0 0 0-2.807m-2.904 1.403a2.903 2.903 0 1 1 5.807 0 2.903 2.903 0 0 1-5.807 0M10.741 16.857a1.403 1.403 0 1 0 0 2.807 1.403 1.403 0 0 0 0-2.807m-2.903 1.404a2.903 2.903 0 1 1 5.807 0 2.903 2.903 0 0 1-5.807 0M5.417 9.002a1.417 1.417 0 1 0 .001 2.835 1.417 1.417 0 0 0-.001-2.835M2.5 10.42a2.918 2.918 0 1 1 5.835 0 2.918 2.918 0 0 1-5.835 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m8.282 3.312.001.003.013.028q.018.043.064.13c.062.115.159.274.294.44.272.333.671.664 1.237.779a.75.75 0 1 1-.3 1.47 3.5 3.5 0 0 1-1.257-.527v4.702a.75.75 0 1 1-1.5 0V3.586a.75.75 0 0 1 1.448-.274v.001l.001.002M21.653 5.87a.75.75 0 0 1 .346.632v10.224a.75.75 0 0 1-1.5 0V7.638a17.3 17.3 0 0 1-6.856 1.192v9.431a.75.75 0 1 1-1.5 0V8.038a.75.75 0 0 1 .808-.747c2.66.207 5.362-.252 7.982-1.47a.75.75 0 0 1 .72.049"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.93 9.836a.75.75 0 0 1-.365.997c-2.854 1.327-5.814 1.832-8.731 1.604a.75.75 0 0 1 .117-1.496c2.66.209 5.362-.25 7.982-1.469a.75.75 0 0 1 .996.364"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongNotesOutline;
