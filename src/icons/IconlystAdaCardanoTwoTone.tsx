import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdaCardanoTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.35 15.109a.535.535 0 1 0-1.07 0 .535.535 0 0 0 1.07 0M18.349 8.556a.535.535 0 1 1-1.07 0 .535.535 0 0 1 1.07 0M6.717 15.107a.535.535 0 1 1 1.07 0 .535.535 0 0 1-1.07 0M6.717 8.556a.535.535 0 1 0 1.07 0 .535.535 0 0 0-1.07 0M4.043 11.832a.535.535 0 1 1 1.07 0 .535.535 0 0 1-1.07 0M21.023 11.832a.535.535 0 1 0-1.07 0 .535.535 0 0 0 1.07 0M13.069 17.648a.535.535 0 1 1-1.07 0 .535.535 0 0 1 1.07 0M8.055 18.383a.535.535 0 1 1 1.07 0 .535.535 0 0 1-1.07 0M17.013 18.383a.535.535 0 1 0-1.07 0 .535.535 0 0 0 1.07 0M8.055 5.28a.535.535 0 1 0 1.07 0 .535.535 0 0 0-1.07 0M17.013 5.28a.535.535 0 1 1-1.07.001.535.535 0 0 1 1.07 0M13.068 6.351a.535.535 0 1 1-1.07 0 .535.535 0 0 1 1.07 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.464 14.774a.669.669 0 1 1-1.337 0 .669.669 0 0 1 1.337 0M14.673 14.774a.669.669 0 1 1-1.337 0 .669.669 0 0 1 1.337 0M9.927 11.965a.669.669 0 1 1-1.337 0 .669.669 0 0 1 1.337 0M16.279 11.965a.669.669 0 1 1-1.338 0 .669.669 0 0 1 1.338 0M11.464 9.225a.669.669 0 1 1-1.337 0 .669.669 0 0 1 1.337 0M14.673 9.225a.669.669 0 1 1-1.337 0 .669.669 0 0 1 1.337 0M12.414 20.989V21m0-18v.011M4.629 16.494l-.01.006m15.589-9-.01.006m0 8.988.01.006m-15.589-9 .01.006"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAdaCardanoTwoTone;
