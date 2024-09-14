import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlanetOutline = ({
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
      d="M20.121 7.8c.95-.026 1.96.179 2.48.995.432.68.332 1.49.059 2.204-.28.73-.798 1.52-1.471 2.319-1.352 1.605-3.445 3.384-5.951 4.981-2.507 1.597-5.004 2.742-7.03 3.289-1.008.272-1.943.408-2.723.353-.762-.053-1.54-.306-1.972-.985-.523-.821-.277-1.829.153-2.684.452-.9 1.231-1.891 2.227-2.892a.75.75 0 0 1 1.063 1.058c-.938.943-1.597 1.805-1.95 2.508-.375.747-.301 1.089-.228 1.204.058.09.247.255.812.295.548.038 1.301-.055 2.227-.305 1.843-.498 4.2-1.567 6.615-3.106s4.38-3.223 5.61-4.683c.617-.733 1.02-1.377 1.217-1.889.203-.53.134-.77.076-.861-.072-.114-.348-.324-1.174-.302-.777.02-1.827.248-3.066.692a.75.75 0 0 1-.506-1.413c1.317-.471 2.534-.752 3.532-.779"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.057 9a5.875 5.875 0 1 0 0 11.75 5.875 5.875 0 0 0 0-11.75m-7.375 5.875a7.375 7.375 0 1 1 14.75 0 7.375 7.375 0 0 1-14.75 0M2.462 11.077a.75.75 0 0 0 .203 1.04l.01.008a.75.75 0 1 0 .838-1.244l-.01-.007a.75.75 0 0 0-1.041.203M21.514 21.075a.75.75 0 0 0 .202 1.04l.01.008a.75.75 0 0 0 .839-1.244l-.01-.007a.75.75 0 0 0-1.041.203"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.057 12.252a2.39 2.39 0 0 0-2.391 2.391.75.75 0 0 1-1.5 0 3.89 3.89 0 0 1 3.891-3.89.75.75 0 0 1 0 1.5M16.77 3.25a.576.576 0 1 0 0 1.152.576.576 0 0 0 0-1.152m-2.076.576a2.076 2.076 0 1 1 4.152 0 2.076 2.076 0 0 1-4.152 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlanetOutline;
