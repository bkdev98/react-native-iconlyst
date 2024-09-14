import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZoomInOutline = ({
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
      d="M12.564 3.902a.897.897 0 0 0-.897.898v9.715a1.381 1.381 0 0 1-2.072 1.196l-1.208-.698a1.172 1.172 0 0 0-1.73.761c-.096.431.058.857.384 1.106l-.455.596.455-.596c.989.753 2.608 1.906 4.128 2.631 1.097.524 2.576.734 4.015.58 1.445-.154 2.73-.66 3.51-1.44.702-.703 1.288-1.816 1.582-3.072.294-1.253.28-2.568-.127-3.665-.342-.925-1.124-1.418-2.253-1.703-.852-.215-1.768-.281-2.683-.347a44 44 0 0 1-1.007-.081.75.75 0 0 1-.68-.735l-.065-4.262a.897.897 0 0 0-.897-.884m-2.397.898a2.397 2.397 0 0 1 4.794-.037l.055 3.58.19.015c.948.068 2.066.149 3.057.399 1.35.34 2.703 1.045 3.293 2.636.532 1.436.525 3.062.18 4.529-.343 1.464-1.04 2.848-1.982 3.79-1.104 1.104-2.762 1.695-4.411 1.871-1.657.177-3.425-.052-4.82-.718-1.664-.795-3.383-2.024-4.391-2.793a2.58 2.58 0 0 1-.94-2.623 2.672 2.672 0 0 1 3.946-1.735l1.029.595zM3.25 7.316a.75.75 0 0 1 .75.75v1.231h1.192a.75.75 0 1 1 0 1.5H3.25a.75.75 0 0 1-.75-.75v-1.98a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.145 7.93a.75.75 0 0 1-.75-.75V5.949H6.203a.75.75 0 1 1 0-1.5h1.942a.75.75 0 0 1 .75.75v1.98a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.693 4.679a.75.75 0 0 1-.005 1.06l-4.894 4.856A.75.75 0 0 1 2.737 9.53l4.895-4.855a.75.75 0 0 1 1.06.004"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystZoomInOutline;
