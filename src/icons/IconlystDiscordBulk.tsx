import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscordBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.099 17.278c.174-.084.242-.33.084-.443-.116-.084-.209-.052-.426.04-3.168 1.349-6.338 1.335-9.508.01-.228-.096-.316-.133-.428-.062-.168.107-.103.367.076.454l1.041.506a.3.3 0 0 1 .123.431c-.285.45-.566.894-.856 1.332-.03.046-.164.06-.233.04a16.3 16.3 0 0 1-4.752-2.403.4.4 0 0 1-.146-.26c-.329-3.63.44-7.017 2.281-10.163.703-1.201.701-1.222 2.2-1.698.787-.25 1.6-.422 2.398-.64.176-.046.264.006.334.165.088.197.22.377.287.58.081.242.205.299.456.263 1.375-.198 2.751-.168 4.125.013a.18.18 0 0 0 .18-.102c.128-.258.26-.515.382-.778.063-.138.141-.176.294-.147 1.29.244 2.536.619 3.731 1.16a.8.8 0 0 1 .318.269c1.413 2.11 2.366 4.404 2.752 6.92a17 17 0 0 1 .112 4.154.44.44 0 0 1-.168.28 16.2 16.2 0 0 1-4.707 2.375c-.083.026-.24.01-.276-.043-.288-.431-.563-.871-.845-1.32a.3.3 0 0 1 .124-.43z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.396 12.16c.056.187.066.387.093.582a.3.3 0 0 1 .003.056c-.024.546-.195 1.028-.568 1.429-.713.767-1.833.746-2.522-.041-.64-.733-.697-1.898-.117-2.68.428-.579 1.007-.852 1.721-.709.742.15 1.178.657 1.39 1.363M17.06 12.224c.044.164.054.338.076.507a.3.3 0 0 1 .003.05c-.02.525-.175.996-.518 1.397-.687.801-1.822.816-2.542.039-.732-.792-.729-2.127.016-2.908.454-.475 1.012-.658 1.65-.49.72.19 1.127.705 1.316 1.405"
    />
  </Svg>
);
export default IconlystDiscordBulk;
