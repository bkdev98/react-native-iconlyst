import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeight1Bold = ({
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
      d="M20.847 8.785a2188 2188 0 0 0-5.695-5.693c-.805-.78-1.932-.791-2.741-.027-.393.37-.774.755-1.147 1.145a2.017 2.017 0 0 0 .025 2.803q2.835 2.843 5.679 5.679a2.018 2.018 0 0 0 2.787.066c.413-.375.808-.77 1.175-1.174.79-.871.759-1.944-.083-2.8M7.011 11.29a2.013 2.013 0 0 0-2.802-.025c-.39.373-.775.754-1.146 1.146-.764.81-.753 1.937.033 2.747l5.687 5.69c.443.435.943.653 1.444.653.468 0 .935-.19 1.356-.57.408-.371.803-.767 1.174-1.176a2.02 2.02 0 0 0-.068-2.786 2533 2533 0 0 0-5.678-5.678M3.855 17.628a.75.75 0 1 0-1.061 1.061l2.519 2.518a.747.747 0 0 0 1.06 0 .75.75 0 0 0 0-1.061zM20.145 6.374a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.061l-2.518-2.518a.749.749 0 1 0-1.06 1.061zM12.774 9.31l-.014-.013a.5.5 0 0 0-.694.013L9.39 11.987a.5.5 0 0 0 0 .707l.014.013 1.902 1.903a.5.5 0 0 0 .708 0l2.677-2.676a.5.5 0 0 0 0-.707z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWeight1Bold;
