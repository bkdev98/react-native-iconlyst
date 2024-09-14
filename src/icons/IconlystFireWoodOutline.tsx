import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFireWoodOutline = ({
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
      d="M5.513 21.747a.75.75 0 0 1-.314-1.432l13.476-6.195a.75.75 0 0 1 .627 1.363l-13.476 6.2a.8.8 0 0 1-.313.064M11.743 14.126a4.89 4.89 0 0 1-4.374-2.667 4.894 4.894 0 0 1 .992-5.961q.433-.425.91-.8a.75.75 0 0 1 1.186.61q.054.754.226 1.492a.8.8 0 0 0 .133-.127 5.4 5.4 0 0 0 .654-3.575.75.75 0 0 1 1.092-.761 8.3 8.3 0 0 1 3.789 3.708 6 6 0 0 1 .07 5.346 4.76 4.76 0 0 1-3.544 2.613 5.4 5.4 0 0 1-1.134.122M9.15 6.84a3.38 3.38 0 0 0-.456 3.914 3.464 3.464 0 0 0 3.879 1.78l.038-.007a3.3 3.3 0 0 0 2.468-1.812 4.49 4.49 0 0 0-.073-4 6.2 6.2 0 0 0-2-2.351 5.64 5.64 0 0 1-1.06 3.3 2.07 2.07 0 0 1-1.49.745.88.88 0 0 1-.615-.136A2.38 2.38 0 0 1 9.15 6.84"
    />
    <Path
      fill={props.color}
      d="M11.877 11.161q-.225 0-.446-.035a.75.75 0 1 1 .226-1.483.93.93 0 0 0 1.084-.5.75.75 0 0 1 1.381.588 2.46 2.46 0 0 1-2.245 1.43M18.987 21.747a.8.8 0 0 1-.313-.068l-3.858-1.77a.751.751 0 0 1 .627-1.365l3.858 1.774a.75.75 0 0 1-.314 1.431zm-10.226-4.7a.75.75 0 0 1-.314-.069l-3.249-1.493a.75.75 0 0 1 .627-1.363l3.25 1.493a.75.75 0 0 1-.314 1.432"
    />
  </Svg>
);
export default IconlystFireWoodOutline;
