import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashCircleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M10.717 20.163a8.3 8.3 0 0 1-1.762-.49 1 1 0 0 0-.744 1.857c.714.284 1.451.49 2.191.608q.08.012.158.012a1 1 0 0 0 .157-1.987M5.706 17.272A1 1 0 0 0 4.15 18.53a10 10 0 0 0 1.336 1.348.996.996 0 0 0 1.408-.126 1 1 0 0 0-.126-1.41 7.6 7.6 0 0 1-1.062-1.07M4.421 15.05a7.8 7.8 0 0 1-.433-1.611 1 1 0 0 0-1.978.302c.104.677.287 1.36.545 2.029a1 1 0 0 0 1.866-.72M2.846 11.698q.078.012.155.012c.484 0 .91-.353.987-.846A7.8 7.8 0 0 1 4.47 9.12a1 1 0 1 0-1.85-.76 9.7 9.7 0 0 0-.61 2.195 1 1 0 0 0 .835 1.143M5.61 4.306a9.7 9.7 0 0 0-1.346 1.338.998.998 0 0 0 .77 1.637 1 1 0 0 0 .772-.364 8 8 0 0 1 1.07-1.062 1 1 0 0 0-1.265-1.55M10.405 2.162a9.5 9.5 0 0 0-2.038.55 1 1 0 0 0 .74 1.856 7.5 7.5 0 0 1 1.61-.429c.544-.086.917-.599.831-1.144a1.006 1.006 0 0 0-1.143-.833" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.786 2.78a9.5 9.5 0 0 0-2.188-.616.996.996 0 0 0-1.147.827 1 1 0 0 0 .828 1.147c.63.102 1.21.265 1.728.484a1 1 0 1 0 .779-1.842M18.283 7.018a1 1 0 0 0 1.406.15 1 1 0 0 0 .15-1.406 8.6 8.6 0 0 0-1.358-1.355 1 1 0 1 0-1.24 1.568c.366.29.717.641 1.042 1.043M19.577 9.235c.208.549.354 1.096.435 1.627a1.001 1.001 0 0 0 1.978-.303 10 10 0 0 0-.543-2.033 1 1 0 0 0-1.87.709M21.151 12.602a.997.997 0 0 0-1.14.837 8 8 0 0 1-.488 1.752 1 1 0 1 0 1.858.738 10 10 0 0 0 .606-2.187 1 1 0 0 0-.836-1.14M18.179 17.383a6.5 6.5 0 0 1-1.043 1.037A.999.999 0 1 0 18.36 20a8.3 8.3 0 0 0 1.375-1.36 1 1 0 1 0-1.556-1.257M14.893 19.722a8 8 0 0 1-1.625.443 1.001 1.001 0 0 0 .342 1.971c.749-.13 1.41-.312 2.023-.557a1 1 0 1 0-.74-1.857"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashCircleBulk;
