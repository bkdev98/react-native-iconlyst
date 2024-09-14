import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlickerLeftBulk = ({
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
      d="m20.137 11.467-1.976-3.493a.95.95 0 0 0-.587-.454.93.93 0 0 0-.73.09 2.01 2.01 0 0 0-.759 2.733.3.3 0 0 1 .03.06l.993 1.772a.42.42 0 0 1-.16.578.42.42 0 0 1-.578-.16l-4.065-7.189a1.52 1.52 0 0 0-.903-.709c-.77-.212-1.61.26-1.839 1.043-.099.393-.048.796.143 1.135l2.686 4.747a.425.425 0 0 1-.16.578.434.434 0 0 1-.578-.16L8.128 5.804a1.478 1.478 0 0 0-1.481-.742c-.39.05-.75.254-.989.56q-.181.226-.263.522c-.056.196-.07.393-.043.581.018.183.082.378.18.548l3.524 6.233a.423.423 0 0 1-.16.577.434.434 0 0 1-.578-.16L6.262 10.29c-.393-.695-1.342-.962-2.032-.572-.694.393-.962 1.342-.572 2.031L7.54 18.61a7.2 7.2 0 0 0 4.358 3.348 7.23 7.23 0 0 0 8.871-5.018 7.22 7.22 0 0 0-.63-5.472"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.846 3.636a.7.7 0 0 0 .076.284c.013.026.016.054.031.078l1.052 1.62a.75.75 0 0 0 1.258-.815l-.13-.202c1.33.352 2.72 1.069 3.514 2.307a.747.747 0 0 0 1.036.226.75.75 0 0 0 .225-1.036c-1.009-1.572-2.674-2.48-4.305-2.925l.008-.004a.75.75 0 0 0-.817-1.26l-1.62 1.052c-.017.01-.027.029-.043.042a1 1 0 0 0-.1.098.7.7 0 0 0-.089.116 1 1 0 0 0-.056.13c-.01.03-.03.055-.037.087-.004.019.002.039 0 .059-.004.02-.015.036-.016.057 0 .03.011.057.013.086"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlickerLeftBulk;
