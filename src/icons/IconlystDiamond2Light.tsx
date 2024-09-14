import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamond2Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.298 3.447a.774.774 0 0 1 1.403 0l2.38 5.098a.77.77 0 0 0 .375.374l5.097 2.38a.774.774 0 0 1 0 1.402l-5.097 2.38a.77.77 0 0 0-.375.374l-2.38 5.098a.774.774 0 0 1-1.403 0L8.92 15.455a.77.77 0 0 0-.375-.374l-5.098-2.38a.774.774 0 0 1 0-1.403l5.098-2.38a.77.77 0 0 0 .375-.373z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiamond2Light;
